import {
  After,
  Status,
  ITestCaseHookParameter
} from "@cucumber/cucumber";

import { CustomWorld } from "./world";

After(async function (
  this: CustomWorld,
  scenario: ITestCaseHookParameter
) {

  if (
    scenario.result?.status ===
    Status.FAILED
  ) {

    console.error("FAILED SCENARIO");

    console.error(
      "Scenario:",
      this.runtime.scenarioName
    );

    console.error(
      "Endpoint:",
      this.api.endpoint
    );

    console.error(
      "Request:",
      this.api.requestBody
    );

    console.error(
      "Response:",
      this.api.responseBody
    );
  }

  await this.clearScenarioData();

  console.log(
    `========== END ==========
Scenario: ${scenario.pickle.name}
=========================`
  );
});