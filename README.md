# regex match checker

This action checks if a regex matches and if it does you can configure if you want the action to fail or succeed

## Inputs

### `text`

**Required** The text you want to check

### `regex`

**Required** The regex you want to use for checking

### `flags`

The regex flags you want to use for checking

### `fail-on-match`

Whether to fail on successful match

### `fail-on-match`

Whether to fail on no match

## Outputs

### `match`

Whether the regex matched or not

## Example usage

```yaml
uses: Wissididom/regex-match-checker@main
with:
  text: "Hello World"
  regex: (Hello|Bye) World
  flags: "g"
  fail-on-match: false
  fail-on-no-match: true
```
