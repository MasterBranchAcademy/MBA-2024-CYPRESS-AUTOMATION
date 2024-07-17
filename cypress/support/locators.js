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
    searchBox: '#filter_keyword',
    searchButton: '.button-in-search',
    searchItem: 'Facial Cream',
    itemResult: '.bgnone',
    emptySearch: '  ',
    emptyResult: '#maincontainer > div > div > div > div > div:nth-child(4)',

  }

}
export default LOCATORS; 
