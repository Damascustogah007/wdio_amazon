describe("Amazon Home Page", () => {
  it("Access url, verify url and title", async () => {
    await browser.url("/");
    await expect(browser).toHaveUrlContaining("amazon");
    await expect(browser).toHaveTitleContaining("Amazon");
  });

  it("Search content and verify text", async () => {
    const searchBar = await $('//input[@placeholder="Search Amazon"]');
    const searchButton = await $('//input[@value="Go"]');
    const searchResult = await $("//span[contains(text(), 'Macbook')]");

    await searchBar.setValue("Macbook");
    await searchButton.click();
    await expect(searchResult).toHaveTextContaining("Macbook");
  });

  it.only("Auto suggestion", async () => {
    const search = await $('input[id=\"twotabsearchtextbox\"]')
    const firstSuggestion = await $('//span[@class="s-heavy"]')
    const secondSuggestion = await $('.a-color-state.a-text-bold')
    const searchResultModal = await $('.left-pane-results-container')
    const result = await $('//span[contains(text(), \'Results\')]');

    await browser.url("/");
    await search.click();
    await searchResultModal.waitForExist();

    const suggestionText = await firstSuggestion.getText();

    await firstSuggestion.click();
    await result.isDisplayed();

    await expect(secondSuggestion).toHaveTextContaining(suggestionText)



   

   
  });
});
