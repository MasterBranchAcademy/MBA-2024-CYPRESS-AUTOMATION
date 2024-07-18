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
    emptyResult: '#maincontainer > div > div > div > div > div:nth-child(4)',
  },
  PURCHASE_FEATURE: {
    books: '#categorymenu > nav > ul > li:nth-child(8) > a',
    paperbooks: '#maincontainer > div > div > div > div > ul > li:nth-child(2) > a > img',
    selectedItem: '#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(3) > div.thumbnail > a > img',
    addToCardButton: '#product > fieldset > div:nth-child(4) > ul > li > a',
    checkoutButton: '#cart_checkout2',
    userInputBox: '#loginFrm_loginname',
    passwordBox: '#loginFrm_password',
    passwordButton: '#loginFrm_password',
    loginButton: '#loginFrm > fieldset > button',
    confirmOrderButton: '#checkout_btn',
    assertionText: '#maincontainer > div > div > div > h1 > span.maintext',
  },
  REGISTERED_USER: {
    loginMenu: '#customer_menu_top > li > a',
    orderHistory: '#maincontainer > div > div.column_right.col-md-3.col-xs-12.mt20 > div.sidewidt > div > ul > li:nth-child(6) > a',
    orderedItem: '#button_edit',
    itemStatus: '#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div.container-fluid > table > tbody > tr:nth-child(2) > td:nth-child(2)',

  }


}
export default LOCATORS; 
