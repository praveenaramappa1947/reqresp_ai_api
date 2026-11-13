import {
  Before,
  ITestCaseHookParameter
} from "@cucumber/cucumber";

import { CustomWorld } from "./world";

Before(async function (
  this: CustomWorld,
  scenario: ITestCaseHookParameter
) {

  await this.initializeScenario(
    scenario.pickle.name
  );

  console.log(
    `========== START ==========
Scenario: ${scenario.pickle.name}
===========================`
  );
});