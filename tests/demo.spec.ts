import { test, expect } from '@playwright/test';
import { pageElements } from '../pages/pageObjectModels';
import { Actions } from '../actions/Actions';

test('Demo Test', async ({page}) => {

    const pe = new pageElements(page)
    const actions = new Actions(page)
    await actions.visitURL('/')
    await actions.click(pe.elements)
    await actions.click(pe.textBox)
    await actions.fillText(pe.nameInput, "Prashant Singh")
    await actions.fillText(pe.emailInput, "prashant.singh@testunity.com")
    await actions.fillText(pe.currentAddInput, "XYZ Current Address")
    await actions.fillText(pe.permanentAddInput, "XYZ Permanent Address")
    await actions.click(pe.btnSubmit)
  
  });

test('login Test with invalid creds', async ({page}) => {

    const pe = new pageElements(page)
    const actions = new Actions(page)
    await actions.visitURL('/')
    await actions.click(pe.bookStore)
    await actions.click(pe.loginOption)
    await actions.fillText(pe.nameInput, "prashant")
    await actions.fillText(pe.passwordInput, "testing")
    await actions.click(pe.btnLogin)
    expect(await actions.getTxt(pe.errorMessage)).toEqual("Invalid username or password!")
  
  });

test('login Test with valid creds', async ({page}) => {

    const pe = new pageElements(page)
    const actions = new Actions(page)
    await actions.visitURL('/')
    await actions.click(pe.bookStore)
    await actions.click(pe.loginOption)
    await actions.fillText(pe.nameInput, "prashant.singh")
    await actions.fillText(pe.passwordInput, "Testing@123")
    await actions.click(pe.btnLogin)
    await actions.waitNavigation("profile")
    expect(page.url()).toEqual("https://demoqa.com/profil")
  });