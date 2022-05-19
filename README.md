Repro for https://github.com/microsoft/playwright/issues/14236

To run and repro the unexpected failure on WK (which works on 1.21):

```
$ docker build -t rwol/repro .
$ docker run --rm rwoll/repro

Running 3 tests using 1 worker
··××F

  1) [webkit] › example.spec.ts:7:1 › example ======================================================

    page.goto: WebKit encountered an internal error
    =========================== logs ===========================
    navigating to "https://example.com/", waiting until "load"
    ============================================================

      2 |
      3 | test.beforeEach(async ({ page }, testInfo) => {
    > 4 |   await page.goto('https://example.com');
        |              ^
      5 | });
      6 |
      7 | test('example', async ({ page }) => {

        at /testspace/tests/example.spec.ts:4:14

    Retry #1 ---------------------------------------------------------------------------------------

    page.goto: WebKit encountered an internal error
    =========================== logs ===========================
    navigating to "https://example.com/", waiting until "load"
    ============================================================

      2 |
      3 | test.beforeEach(async ({ page }, testInfo) => {
    > 4 |   await page.goto('https://example.com');
        |              ^
      5 | });
      6 |
      7 | test('example', async ({ page }) => {

        at /testspace/tests/example.spec.ts:4:14

    attachment #1: trace (application/zip) ---------------------------------------------------------
    test-results/example-example-webkit-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/example-example-webkit-retry1/trace.zip

    ------------------------------------------------------------------------------------------------

    Retry #2 ---------------------------------------------------------------------------------------

    page.goto: WebKit encountered an internal error
    =========================== logs ===========================
    navigating to "https://example.com/", waiting until "load"
    ============================================================

      2 |
      3 | test.beforeEach(async ({ page }, testInfo) => {
    > 4 |   await page.goto('https://example.com');
        |              ^
      5 | });
      6 |
      7 | test('example', async ({ page }) => {

        at /testspace/tests/example.spec.ts:4:14


  1 failed
    [webkit] › example.spec.ts:7:1 › example =======================================================
  2 passed (4s)
```
