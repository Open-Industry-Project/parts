# Open Industry Project parts

The listed part library for the [Open Industry Project](https://www.openindustryproject.org) simulator: parts other
people publish, reviewed, and served to everyone through **Get parts** in the app. The library is built from this
repository and served at `https://parts.openindustryproject.org/oip.community/index.json`, signed with the project's
key.

## Publishing a part

The easiest way is from the app: right-click your part in the Scene dock (or use the Inspector header) and choose
**Publish to Part Library…**. The app checks the part, signs you in with GitHub, and opens the pull request here under
your own account.

To submit by hand, add one folder under `parts/`, named by the part's id:

```
parts/u.yourlogin.lift-table/
  manifest.json        the part, as a .oippart or a project's parts/<id>/ folder holds it
  behavior.js
  assets/<sha256>.glb  its models and textures, if any
  description.txt      a paragraph: what the part is and what it is for (shown in Get parts)
  listing.json         { "training": false }, or true to allow training use
  thumbnail.webp       its card picture (optional)
```

Then open a pull request and tick the rights line in the template. You can run the same checks first, from a clone of
the simulator's repository: `npm run check-submission -- <this repo>/parts --namespaces <this repo>/namespaces.json
--author <your login>`.

## Ids and namespaces

- **`u.<your GitHub login>.<name>`** is yours, with no setup.
- **`<namespace>.<name>`** belongs to a GitHub organization listed in [namespaces.json](namespaces.json); any public
  member of it may publish there. To register one, open an issue naming the namespace and the organization. The
  organization should have verified the matching domain on GitHub.
- **`oip.*`** is the project's own and is published from the simulator's repository.

## What happens to a submission

1. **Checks** run on every pull request: the part builds, its namespace is the author's, everything it uses is inside
   it, its models and textures are within the limits, and it runs alone at its defaults and at each setting's
   extremes, deterministically, in a process capped at 1.5 GB and 120 s. The result is posted on the pull request.
2. **Review** by a maintainer, from [REVIEW.md](REVIEW.md): where its models came from, nothing confidential, and that
   it serves designing, programming, simulating or validating a line.
3. **Listing.** When the pull request is merged, a maintainer publishes the library (the simulator repository's Part
   library workflow, with "listed" ticked): it is rebuilt and signed, and the part appears in Get parts.
   Each listed version records what it does, and every later version of the simulator is tested against it, so a
   listed version keeps working for good.

## Licences

Every listed part is published under the **MIT licence** for its code ([LICENSE](LICENSE)) and **CC BY 4.0** for its
models and textures ([LICENSE-ASSETS.txt](LICENSE-ASSETS.txt)). A part is used to train AI models only if its publisher
set `"training": true`.

## Takedowns and privacy

To report a listed part that infringes your rights, write to parts@openindustryproject.org. A part reported credibly
as infringing is removed and its files deleted within 7 days. What publishing collects and makes public:
[openindustryproject.org/privacy](https://www.openindustryproject.org/privacy/).
