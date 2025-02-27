import { t } from "testcafe";
import { PolicyMenuActions } from "../../../../ui/pages/gw/generated/policysolutions/pages/navigation/menuActions/PolicyMenuActions.js"
import { NavigationScenario } from "./NavigationScenario.js";
import { Renewal_New } from "./scenarioPages/renewalWizard/Renewal_New.js";
import { RenewalWizard_RenewalPopup } from "../../../pages/gw/generated/policysolutions/pages/popup/Renewal/RenewalWizard_RenewalPopup.js";
import { JobComplete_New } from "./scenarioPages/other/jobComplete_New.js";
import { NewSubmission_Ext } from "./scenarioPages/policy/NewSubmission_Ext.js";
import world from "../../../../ui/util/gw/world"


const policyMenuActions = new PolicyMenuActions()
const navigationScenario = new NavigationScenario()
const renewal_New = new Renewal_New()
const renewalWizard_RenewalPopup = new RenewalWizard_RenewalPopup()
const jobComplete_New = new JobComplete_New()
const newSubmission_Ext = new NewSubmission_Ext()

export class RenewalScenario {

    async initiatePolicyRenewal() {
        await policyMenuActions.policyFilePolicyFileMenuActions.click()
        await policyMenuActions.policyFileMenuActions_NewWorkOrderPolicyFileMenuActions_RenewPolicy.click()
        await t.eval(() => location.reload(true))
    }

    async editPolicyTransaction() {
        await newSubmission_Ext.editPolicyTransaction_Btn.click()
        await navigationScenario.renewalNext()
    }

    async addCpBlanket(nthOption = 1) {
        await newSubmission_Ext.cpBlanket_AddButton.click()
        await newSubmission_Ext.cpBlanket_Location.selectNthOption(nthOption)
        await newSubmission_Ext.cpBlanket_OK_Btn.click()
        await navigationScenario.renewalNext()
        await t.wait(1000)
    }

    async clickRenew() {
        await renewal_New.RenewalWizard_BindOptions.click()
        await renewal_New.RenewalWizard_Renew.click()
    }

    async renewalQuote() {
        await renewal_New.RenewalWizard_Quote.click()
    }

    async selectRenewalCode() {
        await renewalWizard_RenewalPopup.renewalWizard_RenewalScreenRenewalCode.selectOptionByLabel(world.dataMap.get('RenewalCode'))
        await renewalWizard_RenewalPopup.renewalWizard_RenewalScreenUpdate.click()
    }

    async verifyRenewal() {
        await t.expect(jobComplete_New.jobComplete_Title.component.innerText).eql("Renewal Renewing")
        console.log("Renewal is Successful")
    }

}