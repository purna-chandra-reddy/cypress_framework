/// <reference types="cypress" />
var commonLocator = require('./common.locator.json');
require('cypress-xpath');

class Action {

    pageHeader() {
        return cy.get(commonLocator.heroku.title)
    }

    tableDataClick() {
        return cy.xpath(commonLocator.heroku.tableDataClick)
    }

    dataBoxInput() {
        return cy.xpath(commonLocator.heroku.dataBoxInput)
    }

    refreshTableButton() {
        return cy.xpath(commonLocator.heroku.refreshTableButton)
    }

    dataValue() {
        return cy.xpath(commonLocator.heroku.dataValue)
    }

    openHerokuSite() {
        cy.visit(Cypress.env("herokuHoost") + "/styled/tag/dynamic-table.html")
        cy.title().should("eq", "Table HTML Tag - JavaScript Created")
        this.pageHeader().should("have.text", "Dynamic HTML TABLE Tag")
    }

    sendTestData(inputData) {
        this.tableDataClick().click()
        this.dataBoxInput().type(inputData.toString())
        this.refreshTableButton().click({ force: true })
    }

}

export default Action
