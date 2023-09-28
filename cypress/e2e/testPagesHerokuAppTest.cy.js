/// <reference types = "cypress" />

import Action from '../support/helperFiles/actions'
import testdata from '../fixtures/tableData.json'

const actions = new Action()
require('cypress-xpath');


describe("test data tables", function () {

    this.beforeEach(function () {
        actions.openHerokuSite()
    })

    it("TC_01: send valid test data and verify the table gets updated", () => {
        actions.sendTestData(testdata.tableDataValid)
        actions.dataValue().each(($el, index, $list) => {
            const txt = $el.eq(index).text();
            if (txt.includes(testdata.tableDataValid[index]['name'])) {
                actions.dataValue().eq(index).next().then(function (d) {
                    const gender = d.text()
                    expect(gender).to.contains(testdata.tableDataValid[index]['age']);
                })
            }
        })
    })

})