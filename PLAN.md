---
property: google-drive-mcp
type: mcp-server
last_updated: 2026-06-27
current_focus: doc-standard-bootstrap-and-infrastructure-boundary
---

# google-drive-mcp - Forward Plan

> **Contract:** Forward-looking only. Current live state is in [STATE.md](STATE.md). When a plan item ships, move it to STATE.md's "Recent Shipped" section on session close.

## Current Focus

Keep the fork maintainable while preserving strict per-property Google Drive access boundaries.

1. Keep neutral QNTx docs on `master` separate from active feature branches.
2. Preserve the infrastructure-only boundary: this repo implements the MCP server, while consuming properties declare Google Drive access and scope.
3. Run package checks before source changes and avoid committing credential or token artifacts.

## Queued

- Add a consumer-wiring note only when a specific property adopts this MCP server; it should point to that property's `mcp_allowlist` and `mcp_scopes`, not centralize access here.
- Review active feature branches before starting new implementation work; avoid mixing doc-standard maintenance into feature lines.
- Re-run QNTx `audit-docs.mjs` after the Batch A migration set to verify the average score improves.

## Open Questions

- Which branch/line owns future releases from this fork after the current active feature branches settle?
- Should QNTx maintain a separate consumer-facing wrapper doc for property-scoped Google Drive setup, or keep setup guidance inside each consuming property?