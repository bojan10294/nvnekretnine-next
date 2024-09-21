import List from 'components/List';

export const listItems = [
  {
    description:
      'A project is defined with clear beginning and finish that is intended to accomplish a certain goal or collection of goals within a given time frame and budget. Projects often require a coordinated effort from a cross-functional team of people with a variety of skills and knowledge to fulfill a specific business need or opportunity. The definition of a project is crucial to its effective completion because it clarifies its goals, the resources needed, and the timeframe for completion.',
    img: '/img/define-a-project.png',
    title: 'Defining the project'
  },
  {
    description: `To ensure a project's successful completion, our organization employs a methodical and planned approach to project management. A project team is put together, comprised of people with the knowledge and experience required to design, develop, and implement the solution. Together, the team develops the project's scope, goals, and success criteria.<br> Our client receives regular progress updates, and any problems or hazards are noted and resolved as soon as they materialize.  <br><br>
      `,
    img: '/img/team-discussing-project.jpg',
    title: 'Project organization'
  },
  {
    description:
      'We mainly work with scrum methodology. Scrum is an agile framework for managing complex projects based on values, principles, and practices that emphasize collaboration, continuous improvement, and flexibility. Work is organized into time-boxed iterations called sprints, typically around 2 weeks. The Product Owner sets and communicates the product vision, prioritizes the product backlog, and ensures that the team is building the right thing. The Development Team is responsible for building the product and ensuring that it meets the requirements of the Product Owner. During each sprint, the team works to deliver a potentially shippable product increment. The sprint starts with a sprint planning meeting, during which the team collaboratively plans the work that will be done during the sprint.',
    img: '/img/scrum-method.png',
    title: 'Our way of working'
  },
  {
    description: `The purpose of testing is to identify any defects or issues in the system, and to verify that it functions as intended. Testing is a critical step in the software development process and helps to ensure that the end product is fit for its intended use.<br>
      Testing is typically performed at various stages of the software development process, with different types of testing being performed at different times.<br>
      Testing is an ongoing process and is critical to ensuring the quality and reliability of the final product. By identifying and fixing defects early in the development process, teams can reduce the risk of unexpected problems arising after deployment and increase the chances of delivering a successful project.`,
    img: '/img/testing.jpg',
    title: 'Testing'
  }
];
const DevelopmentSteps = () => (
  <div className="container max-w-4xl mx-auto">
    <List listItems={listItems} type="icon" />
  </div>
);

export default DevelopmentSteps;
