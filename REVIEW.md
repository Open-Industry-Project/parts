# Reviewing a submission

The checks have run before a person looks: the part builds, its namespace is the author's, it carries every model
and texture it uses within the limits, and it runs at each of its settings without a problem, deterministically, in a
capped process. A failing check is the author's to fix. A reviewer checks what a machine cannot.

## Every submission

- [ ] **Provenance.** Where did its models and textures come from? Made by the author, or under a licence that allows
      CC BY 4.0. Nothing derived from a vendor's CAD, software, documentation or screenshots, and no vendor's
      instruction set, data types or file format copied into its code.
- [ ] **Confidentiality.** No customer or real-project names, layouts, tag lists or data, in the part, its
      description or its comments.
- [ ] **Fit.** It serves designing, programming, simulating or validating a line, and is worth a permanent place: every
      later version of the simulator will be tested against it.
- [ ] **Words.** The description says plainly what the part is and does, names no vendor as its specification, and
      claims no certification.
- [ ] **Rights line** ticked in the pull request (the check fails without it).

## New publishers and namespaces

The project owner approves every new publisher and every new namespace. For a namespace, check that the GitHub
organization has verified the matching domain, then add it to `namespaces.json` in a pull request of its own.

After a few clean versions, a publisher's later versions under their own namespace may be merged on the checks alone.

## Takedowns

A credible report of infringement: remove the part's folder in a pull request, merge it and publish (Part library
workflow, "listed" ticked), which drops the part from the index. Then delete its files (`oip.community/<id>/` in the `oip-parts` bucket) within 7 days of the
report. This is the one case a published file is deleted. Projects that copied it keep their copies.
