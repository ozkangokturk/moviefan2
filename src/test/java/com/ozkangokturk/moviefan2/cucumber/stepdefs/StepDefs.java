package com.ozkangokturk.moviefan2.cucumber.stepdefs;

import com.ozkangokturk.moviefan2.Moviefan2App;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = Moviefan2App.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
