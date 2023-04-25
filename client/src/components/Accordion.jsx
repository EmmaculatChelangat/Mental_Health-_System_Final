import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

function AllCollapseExample() {
  return (
    <section id="questions" class="p-5">
      <div class="container">
        <h2 class="tect-center mb-4">Frequently Asked Question</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is mental health?</Accordion.Header>
            <Accordion.Body>
            Mental health includes our emotional, psychological, and social well-being. It affects
            how we think, feel, and act. It also helps determine how we handle stress, relate to
            others, and make healthy choices. Mental health is important at every stage of life,
            from childhood and adolescence through adulthood.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Can you prevent mental health problems?</Accordion.Header>
            <Accordion.Body>
            There's no sure way to prevent mental illness. However, if you have a mental
            illness, taking steps to control stress, to increase your resilience and to boost
            low self-esteem may help keep your symptoms under control.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>What do i need to know?</Accordion.Header>
            <Accordion.Body>
            Many people with a mental health disorder don't get treatment. They may think it
            won't help. Or they don't recognize the symptoms. Others may not be able to afford
            or access treatment. The social stigma of mental illness also stops people from
            getting help. This often means worsening symptoms. In some cases, it leads to
            suicide.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>how do i join the commnunity?</Accordion.Header>
            <Accordion.Body>
            Join the Community In order to contribute you first need to become a member. It's
            completely free and enables you to learn a lot about mental health which can help
            you or your loved ones.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header> What do I do if the support doesn't help?</Accordion.Header>
            <Accordion.Body>
            Ask your psychologist what type of treatment they're using, and discuss trying
            something else if that treatment doesn't work for you.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
    </section>
  );
}

export default AllCollapseExample;