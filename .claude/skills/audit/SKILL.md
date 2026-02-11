---
name: audit
description: Run a comprehensive Lighthouse audit of the page $ARGUMENTS and provide a list of improvements to be implemented in the future.
---

Run a comprehensive Lighthouse audit of the page and provide a list of improvements to be implemented in the future.

Use the Lighthouse MCP for it.

## Workflow

1. **Run Lighthouse Audit**
   - Use the Lighthouse MCP tools to run a comprehensive audit
   - Target all categories: Performance, Accessibility, Best Practices, SEO, PWA
   - Capture both mobile and desktop results if applicable

2. **Analyze Results**
   - Review scores for each category
   - Identify critical issues (red/orange items)
   - Categorize findings by impact and effort

3. **Prioritize Improvements**
   - Group improvements by category:
     - **Critical** (Blocking issues, score < 50)
     - **High Priority** (Major improvements, score 50-89)
     - **Medium Priority** (Polish, score 90-94)
     - **Low Priority** (Optimization, score 95+)

4. **Generate Report**
   - Provide summary of current scores
   - List specific improvements needed
   - Suggest implementation order
   - Estimate effort level for each improvement

## Output Format

Present findings in a structured format:

```markdown
# Lighthouse Audit Report

## Scores

- Performance: XX/100
- Accessibility: XX/100
- Best Practices: XX/100
- SEO: XX/100
- PWA: XX/100

## Critical Issues

- [Issue 1]: [Description] - [Impact]
- [Issue 2]: [Description] - [Impact]

## High Priority Improvements

- [Improvement 1]: [Description] - [Estimated effort]
- [Improvement 2]: [Description] - [Estimated effort]

## Medium Priority Improvements

- [Improvement 1]: [Description]

## Low Priority Optimizations

- [Optimization 1]: [Description]

## Recommended Implementation Order

1. [First improvement] - [Why this first]
2. [Second improvement] - [Why this next]
3. [Third improvement]
```

## Quality Standards

- Provide specific, actionable recommendations
- Include code examples when relevant
- Reference Lighthouse documentation for complex issues
- Consider the project's tech stack when suggesting solutions
