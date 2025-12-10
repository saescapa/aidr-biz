# Session Initialization Checklist

Before starting any work, complete this initialization sequence.

## Required Steps

### 1. Review Project State

- [ ] Read `docs/main.md` for project overview
- [ ] Check `docs/main/recent_work.md` for current state
- [ ] Review `docs.local/todos.md` for pending tasks

### 2. Investigate Recent Changes

```bash
# View recent commits
git log --oneline -10

# Check current branch status
git status

# View uncommitted changes
git diff
```

### 3. Understand Current Focus

Review these questions before proceeding:

- What was the last completed feature/fix?
- Are there any blocking issues?
- What is the next priority task?

### 4. Validate Environment

```bash
# Ensure dependencies are installed
pnpm install

# Verify development server runs
pnpm dev
```

---

## Session Exit Checklist

Before ending any session:

- [ ] Update `docs/main/recent_work.md` with changes made
- [ ] Update `docs.local/todos.md` with completed/new tasks
- [ ] Update relevant documentation if features changed
- [ ] Verify all changes are committed (if requested)
- [ ] Note any blocking issues or next steps

---

## Documentation Update Requirements

Every session must update documentation:

| Scenario | Required Update |
|----------|-----------------|
| Bug fix | Update recent_work.md |
| New feature | Update recent_work.md, relevant docs |
| Refactor | Update recent_work.md, affected docs |
| Config change | Update relevant technical docs |

Documentation is not optional - it ensures continuity between sessions.
