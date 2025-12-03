# Git Best Practices for Claude Code

This document defines how Claude should handle all Git operations for this project.

## Core Principle

**Claude is in charge of ALL git operations.** The user should never need to run git commands manually. The user tells Claude what changes they want, and Claude handles commits, pushes, and branch management.

---

## Pre-Commit Rules

### ALWAYS Before Committing:

1. **Run the build command**
   ```bash
   npm run build
   ```
   - MANDATORY: Code must compile successfully before any commit
   - If build fails, fix errors before proceeding
   - Never commit broken code

2. **Review all changes**
   - Use `git status` to see what files changed
   - Use `git diff` to review actual changes
   - Verify changes are intentional and complete

3. **Security check**
   - NEVER commit `.env` files
   - NEVER commit API keys, tokens, or credentials
   - NEVER commit `credentials.json` or similar files
   - Review all changes for accidental secret inclusions
   - If secrets are detected, warn the user and refuse to commit

4. **Verify .gitignore**
   - Ensure `.gitignore` is properly configured
   - Check that sensitive files are excluded
   - Common exclusions:
     - `.env*` files
     - `node_modules/`
     - Build artifacts (`.next/`, `dist/`, `build/`)
     - IDE files (`.vscode/`, `.idea/`)
     - OS files (`.DS_Store`)

---

## Commit Message Format

### Use Conventional Commits

Format: `<type>: <subject>`

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding or updating tests
- `chore`: Build process, dependencies, tooling

### Subject Line Rules:

1. **Use imperative mood**
   - ✅ "Add ocean theme to portfolio"
   - ❌ "Added ocean theme to portfolio"
   - ✅ "Fix navigation spacing"
   - ❌ "Fixed navigation spacing"

2. **Keep under 50 characters**
   - Be concise and specific
   - More details go in the body

3. **Explain WHAT and WHY, not HOW**
   - The diff shows how
   - The message explains what changed and why
   - Example:
     ```
     feat: add engineering projects page

     Creates dedicated page for showcasing engineering work
     with project cards and ocean theme styling
     ```

4. **One logical change per commit (atomic commits)**
   - Each commit should represent ONE complete, logical change
   - If you're doing multiple things, make multiple commits
   - Benefits:
     - Easier to review
     - Easier to revert if needed
     - Clearer project history

### Examples:

✅ **Good commit messages:**
```
feat: add ocean-themed color palette
fix: correct navigation link styling
docs: update README with setup instructions
refactor: simplify project card component
chore: upgrade Next.js to v16
```

❌ **Bad commit messages:**
```
update stuff
fixed things
WIP
asdf
changes
```

---

## Workflow

### Branch Strategy

- **Work directly on main branch** (solo development)
- No need for feature branches unless specifically requested
- Keep main branch always deployable

### Git Operations Checklist

When the user requests a commit:

1. ✅ Run `npm run build` to verify code compiles
2. ✅ Run `git status` to see changed files
3. ✅ Run `git diff` to review changes
4. ✅ Check for secrets/credentials
5. ✅ Stage relevant files with `git add`
6. ✅ Create commit with proper conventional commit message
7. ✅ Run `git status` after commit to verify
8. ✅ Push to remote if requested (not automatic)

### Push Strategy

- **DO NOT push automatically** unless user explicitly requests
- Ask user before first push if remote doesn't exist
- Use `git push` for subsequent pushes to tracked branches

---

## Security Guidelines

### Never Commit:

- `.env` files (all variants: `.env.local`, `.env.production`, etc.)
- API keys, tokens, access keys
- Passwords or credentials
- Private keys or certificates
- Database connection strings with credentials
- OAuth client secrets
- Any file containing sensitive data

### If User Requests to Commit Secrets:

1. **Warn the user clearly**
   - Explain the security risk
   - Suggest alternatives (environment variables, secret management)

2. **Refuse to commit if secrets detected**
   - Better to be safe than expose credentials

3. **Suggest proper alternatives**
   - Use environment variables
   - Document required env vars in `.env.example`
   - Use secret management services for production

---

## Additional Git Best Practices

### Before Making Commits:

- Verify all tests pass (if tests exist)
- Ensure linting passes: `npm run lint`
- Check that development server runs without errors
- Confirm changes match user's intent

### Commit Timing:

- Commit frequently (after each logical change)
- Don't wait until end of day with massive commits
- Each commit should be reviewable and understandable

### If Build Fails:

1. Show the user the error
2. Fix the error if possible
3. Never commit with broken build
4. Only create commit once build succeeds

---

## Example Workflow

### User says: "I've updated the About page, commit these changes"

Claude's process:
```bash
# 1. Build check
npm run build

# 2. Review changes
git status
git diff app/about/page.tsx

# 3. Stage files
git add app/about/page.tsx

# 4. Commit with proper message
git commit -m "feat: update About page content

Add detailed background section and education information
with ocean-themed styling"

# 5. Verify
git status

# 6. Inform user
# "Changes committed successfully. Run `git push` to push to remote?"
```

---

## Remember

- You are the git expert
- User trusts you to handle all git operations correctly
- Always build before committing
- Always check for secrets
- Always use conventional commit format
- Always keep commits atomic and logical
- Never break the build
- Security is paramount

---

## Quick Reference

| Before Commit | Command |
|---------------|---------|
| Build | `npm run build` |
| Status | `git status` |
| Diff | `git diff` |
| Stage | `git add <files>` |
| Commit | `git commit -m "type: subject"` |
| Verify | `git status` |
| Push | `git push` (only if requested) |

---

**This project uses:** Next.js, TypeScript, Tailwind CSS v4
**Build command:** `npm run build`
**Dev command:** `npm run dev`
