import * as testObj from "../fixtures/testObject.json";
import { isEqual } from "lodash";
describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  const defaultRequestBody = {
    expertise: 0,
    responsibility: 1,
    hoursPerWeek: 40,
    isEmployee: false,
    millis: 0,
  };

  it("should send correct request when isEmployee is changed", () => {
    cy.intercept("POST", "http://localhost:8080/processNumbers", (req) => {
      const { body } = req;
      //expertise":0  "responsibility":1  "hoursPerWeek":40  "isEmployee":true  "millis":0
      console.log("req body ====>" + body.hoursPerWeek);
      req.reply(testObj);
    })
      .as("read")
      .get(".ant-radio-group > :nth-child(2)")
      .click()
      .wait("@read")
      .should((interception: any) => {
        console.log({ interception });
        const { body } = interception.request;
        expect(
          isEqual(body, { ...defaultRequestBody, isEmployee: true })
        ).to.equal(true);
      })
      .get(".ant-radio-group > :nth-child(1)")
      .click()
      .wait("@read")
      .should((interception: any) => {
        console.log({ interception });
        const { body } = interception.request;
        expect(isEqual(body, defaultRequestBody)).to.equal(true);
      })
      .get(
        ':nth-child(4) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > [style="display: flex; flex-direction: row;"] > .ant-slider > .ant-slider-step > [style="left: 100%; transform: translateX(-50%);"]'
      )
      .click()
      .get(
        '[style="padding-bottom: 2em;"] > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > [style="display: flex; flex-direction: row;"] > .ant-slider > .ant-slider-step > [style="left: 100%; transform: translateX(-50%);"]'
      )
      .click();

    //cy.contains("17100");
  });
});
