const LOCATORS = {
    EXAMPLE_PAGE: {
      EXAMPLE: ".example",
    },
    TestCases_PAGE: {
      TestCases: '.nav > li > a[href="/test_cases"]',
    },
    TestCases_Text: {
      TextTitle: ".text-center>b",
    },
    HOME_PAGE: {
    promoSection: '.row.promo_section',
    promotionItem: '.col-md-3.col-xs-6.promo_block',
    promotionDescription: '.promo_text',
    promotionImage: '.promo_icon',
    },
    LOGIN_PAGE: {
    },
    SEARCH_FEATURE: {
      inputArea: '#filter_keyword',
      searchButton: '#search_form > div > div > i',
      searchItem: 'Facial Cream',
      itemResult: '#product_details > div > div:nth-child(2) > div > div > h1 > span',
    }
    
}
export default LOCATORS; 
