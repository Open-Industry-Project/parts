// Pusher - written by the Part Editor (Joint > PLC control). Changing a joint's PLC control or limits there
// writes this script again, so edits made here are lost. Set every joint's PLC control to None to write your own.
// oip-panel {"Part2-1-joint":{"mode":"twoPositions","time":1,"key":"part21Joint"}}

// Moves a joint between A (min) and B (max) at a constant speed while the command tag says so, and reports
// the end it is at. ctx.joints holds the position this script last commanded.
function twoPositions(ctx, joint, a, b, toB, atA, atB, time) {
  const goB = toB ? ctx.readTag(toB) : false
  const now = Math.min(b, Math.max(a, ctx.joints[joint]))
  const target = goB ? b : a
  const stepSize = ((b - a) / Math.max(time, 0.05)) * ctx.dt
  // within one step (plus rounding) of the end: land on it exactly, so At A / At B turn on
  const next = Math.abs(target - now) <= stepSize * 1.001 ? target : now + Math.sign(target - now) * stepSize
  ctx.setJoint(joint, next)
  if (atA) ctx.writeTag(atA, next <= a)
  if (atB) ctx.writeTag(atB, next >= b)
}

definePart({
  params: {
    part21JointToB: { type: 'tag', dir: 'in', stType: 'BOOL', default: '', group: 'Comms', label: "Command (to B)",
      desc: 'TRUE moves to B (1 m), FALSE moves back to A (-0.09 m). Empty: stays at A.' },
    part21JointAtA: { type: 'tag', dir: 'out', stType: 'BOOL', default: '', group: 'Comms', label: "At A",
      desc: 'TRUE while the joint is at A.' },
    part21JointAtB: { type: 'tag', dir: 'out', stType: 'BOOL', default: '', group: 'Comms', label: "At B",
      desc: 'TRUE while the joint is at B.' },
    part21JointTime: { type: 'number', default: 1, min: 0.05, max: 60, step: 0.1, label: "Stroke time (s)",
      desc: 'Time to travel from A to B, and back.' },
  },
  joints: ["Part2-1-joint"],
  step(ctx) {
    const p = ctx.params
    twoPositions(ctx, "Part2-1-joint", -0.09, 1, p.part21JointToB, p.part21JointAtA, p.part21JointAtB, p.part21JointTime)
  },
})
