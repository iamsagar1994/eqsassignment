Feature: Product all test cases



Scenario: Select 5 products and verify the totalprice is matching
Given user visited the webpage
When user landed on the homepage
And user selects any 5 products
And proceed to check out 
Then total products prices matches with the total bill calculated 





Scenario: product names verify 
Given user visited the webpage
When user landed on the homepage
Then verify product names are visible
And log product names

Scenario: Select Products by discount 
Given user visited the webpage
When user landed on the homepage
Then verify product names are visible
And select products by discount

Scenario: Select Products by price asc and verify sort order 
Given user visited the porduct select webpage
When user landed on the Women - My Store page
Then select products by price and verify sort order

Scenario: Select Product colour and verify 
Given user visited the product type selection webpage
When user landed on the Printed Summer Dress
And toggle between colours
And verify colours are updated

Scenario: Select Product logo and verify user is redirected to homepage
Given user visited the porduct select webpage
When user landed on the Women - My Store page
And user selects logo
Then verify user landed on homepage