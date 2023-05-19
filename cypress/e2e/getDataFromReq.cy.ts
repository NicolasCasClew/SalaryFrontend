import { equal } from "assert";
import * as testObj from "../fixtures/testObject.json";
import * as testObj2 from "../fixtures/testObject2.json";
import { isEqual } from "lodash";

describe("template spec", () => {
  beforeEach(() => {
    cy.intercept("POST", "http://localhost:8080/processNumbers", (req) => {
      const { body } = req;
      //expertise":0  "responsibility":1  "hoursPerWeek":40  "isEmployee":true  "millis":0
      if (body.hoursPerWeek >= 24) {
        req.reply(testObj);
      } else {
        req.reply(testObj2);
      }
    })
      .as("read")
      .visit("http://localhost:3000/")
      .wait("@read");
  });

  const defaultRequestBody = {
    expertise: 0,
    responsibility: 1,
    hoursPerWeek: 40,
    isEmployee: false,
    millis: 0,
  };

  it("should send correct request when isEmployee is changed", () => {
    const contractorButton = ".ant-radio-group > :nth-child(2)";
    const employeeButton = ".ant-radio-group > :nth-child(1)";

    cy.get(contractorButton)
      .click()
      .wait("@read")
      .should((interception: any) => {
        const { body } = interception.request;
        expect(isEqual(body, defaultRequestBody)).to.equal(true);
      })
      .get(employeeButton)
      .click()
      .wait("@read")
      .should((interception: any) => {
        const { body } = interception.request;
        expect(
          isEqual(body, { ...defaultRequestBody, isEmployee: true })
        ).to.equal(true);
      });
  });

  it("should return different values if hours are bellow or above 24", () => {
    const hourSlider16 =
      '.ant-slider-step > [style="left: 40%; transform: translateX(-50%);"]';
    const hourSlider32 =
      '.ant-slider-step > [style="left: 80%; transform: translateX(-50%);"]';
    cy.get(hourSlider16)
      .click()
      .wait("@read")
      .should((interception: any) => {
        const { body } = interception.request;
        expect(
          isEqual(body, {
            ...defaultRequestBody,
            hoursPerWeek: 16,
            isEmployee: true,
          })
        ).to.equal(true);
      });
    cy.contains("50.100")
      .get(hourSlider32)
      .click()
      .wait("@read")
      .should((interception: any) => {
        const { body } = interception.request;
        expect(
          isEqual(body, {
            ...defaultRequestBody,
            hoursPerWeek: 32,
            isEmployee: true,
          })
        ).to.equal(true);
      });

    cy.contains("17.100");
  });
  it("changes the inputs and reads the change", () => {
    const hourSlider16 =
      '.ant-slider-step > [style="left: 40%; transform: translateX(-50%);"]';
    const responsibilitySlider1 =
      '.ant-slider-step > [style="left: 66.6667%; transform: translateX(-50%);"]';
    const expertiseSlider2 =
      '.ant-slider-step > [style="left: 25%; transform: translateX(-50%);"]';

    cy.get(hourSlider16)
      .click()
      .wait("@read")
      .should((interception: any) => {
        const { body } = interception.request;
        console.log(body);
        expect(
          isEqual(body, {
            ...defaultRequestBody,
            hoursPerWeek: 16,
            isEmployee: true,
          })
        ).to.equal(true);
      })
      .get(expertiseSlider2)
      .click()
      .wait("@read")
      .should((interception: any) => {
        const { body } = interception.request;
        expect(
          isEqual(body, {
            ...defaultRequestBody,
            hoursPerWeek: 16,
            expertise: 1,
            isEmployee: true,
          })
        ).to.equal(true);
      });
    cy.get(responsibilitySlider1)
      .click()
      .wait("@read")
      .should((interception: any) => {
        const { body } = interception.request;
        expect(
          isEqual(body, {
            ...defaultRequestBody,
            hoursPerWeek: 16,
            expertise: 1,
            responsibility: 3,
            isEmployee: true,
          })
        ).to.equal(true);
      });
  });
});
