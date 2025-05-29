//
// Data source: Indian Constitution - Fundamental Rights
// Each object includes: title, description, real-life example, and 3-5 quiz MCQs with options, answer index, and feedback.
// This file is intended for internal, educational use within the Fundamental Rights Explorer React App.
//

const fundamentalRights = [
  {
    title: "Right to Equality",
    description:
      "Ensures that all persons are equal before the law and prohibits discrimination on grounds of religion, race, caste, sex, or place of birth. Includes equality of opportunity in matters of employment and abolishes untouchability and titles.",
    example:
      "If an employer refuses to hire someone only because of their caste or religion, it is a violation of the Right to Equality. In the landmark case of State of Kerala vs. N.M. Thomas, it was affirmed that affirmative action is permitted to promote real equality.",
    quiz: [
      {
        question: "What does the Right to Equality primarily protect?",
        options: [
          "The right to own property",
          "Equal treatment under the law",
          "Freedom to practice any profession",
          "Right to privacy"
        ],
        correctAnswerIndex: 1,
        feedback: [
          "Incorrect. Property rights are separate from equality.",
          "Correct! The Right to Equality ensures fair and equal treatment for everyone.",
          "No, that's covered under the Right to Freedom.",
          "No, this relates to Article 21, not equality."
        ]
      },
      {
        question: "Which practice is explicitly abolished under the Right to Equality?",
        options: [
          "Child marriage",
          "Untouchability",
          "Manual scavenging",
          "Sati"
        ],
        correctAnswerIndex: 1,
        feedback: [
          "No, while illegal, it's not mentioned here.",
          "Correct! Untouchability is abolished under Article 17.",
          "Manual scavenging is outlawed but as a consequence of abolishing untouchability.",
          "Incorrect. Sati is separately outlawed."
        ]
      },
      {
        question: "Under this right, can the state provide special provisions for socially and educationally backward classes?",
        options: [
          "No, special treatment is not allowed.",
          "Only for women but not other groups.",
          "Yes, affirmative action is allowed.",
          "Only for people with disabilities."
        ],
        correctAnswerIndex: 2,
        feedback: [
          "Actually, constitutional equality allows special treatment for disadvantaged groups.",
          "The state can make special provisions for several disadvantaged groups, not just women.",
          "Correct! Affirmative action is permitted for real equality.",
          "This is one of several groups eligible for positive discrimination."
        ]
      },
      {
        question: "Which Article(s) in the Constitution deal(s) with the Right to Equality?",
        options: [
          "Articles 25–28",
          "Articles 14–18",
          "Articles 19–22",
          "Articles 23–24"
        ],
        correctAnswerIndex: 1,
        feedback: [
          "No, those deal with freedom of religion.",
          "Correct! Articles 14 to 18 cover the Right to Equality.",
          "No, those are about the Right to Freedom.",
          "These address protection from exploitation."
        ]
      }
    ]
  },
  {
    title: "Right to Freedom",
    description:
      "Includes several freedoms: of speech and expression, assembly, association, movement, residence, and profession. Subject to reasonable restrictions for sovereignty, security, and public order.",
    example:
      "A student peacefully protesting in a public park exercises the Right to Freedom of assembly. However, carrying weapons at such an assembly is prohibited. The Supreme Court case of Romesh Thappar vs. State of Madras protects freedom of the press as part of freedom of speech.",
    quiz: [
      {
        question: "Which of the following is NOT part of the Right to Freedom?",
        options: [
          "Freedom of speech and expression",
          "Freedom to form associations",
          "Freedom to property",
          "Freedom of movement"
        ],
        correctAnswerIndex: 2,
        feedback: [
          "Freedom of speech and expression is included.",
          "Forming associations is a key part.",
          "Correct! The right to property is not a fundamental right.",
          "Freedom of movement is protected."
        ]
      },
      {
        question: "Can the government impose restrictions on freedom of speech?",
        options: [
          "Yes, under reasonable grounds",
          "No, never",
          "Only during election time",
          "Only for minors"
        ],
        correctAnswerIndex: 0,
        feedback: [
          "Correct! Restrictions may be imposed for security, public order, decency, etc.",
          "Absolute freedom does not exist in the Constitution.",
          "Restrictions apply at all times if necessary.",
          "Age is not the criterion for such restrictions."
        ]
      },
      {
        question: "A person peacefully moving from one state to another for work is exercising which freedom?",
        options: [
          "Freedom of association",
          "Freedom of movement and residence",
          "Freedom of speech",
          "Cultural freedom"
        ],
        correctAnswerIndex: 1,
        feedback: [
          "Associations relate to groups.",
          "Correct! Movement and residence are protected freedoms.",
          "No, that's about expression.",
          "Not relevant here."
        ]
      }
    ]
  },
  {
    title: "Right to Constitutional Remedies",
    description:
      "Empowers citizens to move the Supreme Court or High Courts for the enforcement of Fundamental Rights. Courts can issue writs such as habeas corpus, mandamus, prohibition, certiorari, and quo warranto to enforce rights.",
    example:
      "If someone's freedom is illegally taken away by authorities, they can approach the Supreme Court under Article 32 for a writ of habeas corpus. In the case of Kesavananda Bharati vs. State of Kerala, the Supreme Court upheld the right to approach courts as the 'heart' of the Constitution.",
    quiz: [
      {
        question: "What is the purpose of the Right to Constitutional Remedies?",
        options: [
          "To directly amend the Constitution",
          "To seek judicial enforcement of Fundamental Rights",
          "To obtain reservation in education",
          "To vote in elections"
        ],
        correctAnswerIndex: 1,
        feedback: [
          "Amendment powers are separate.",
          "Correct! This right allows people to move courts if their rights are violated.",
          "No, this concerns legal remedies, not reservation.",
          "Voting is protected elsewhere."
        ]
      },
      {
        question: "Which Article did Dr. B.R. Ambedkar describe as the 'heart and soul' of the Constitution?",
        options: [
          "Article 19",
          "Article 21",
          "Article 32",
          "Article 44"
        ],
        correctAnswerIndex: 2,
        feedback: [
          "Article 19 is important, but not described as 'heart and soul'.",
          "Personal liberty is Article 21.",
          "Correct! Article 32 enables the Right to Constitutional Remedies.",
          "Article 44 relates to Uniform Civil Code."
        ]
      },
      {
        question: "What is a 'writ' in the context of Constitutional Remedies?",
        options: [
          "A citizen initiative",
          "A type of budget",
          "An order from a court to enforce a right",
          "A law made by Parliament"
        ],
        correctAnswerIndex: 2,
        feedback: [
          "Citizen initiatives are not writs.",
          "Writs do not relate to budgets.",
          "Correct! Writs are court orders to protect rights.",
          "Laws are different."
        ]
      },
      {
        question: "Which court(s) can issue writs for the enforcement of Fundamental Rights?",
        options: [
          "Only Supreme Court",
          "Only High Courts",
          "Both Supreme Court and High Courts",
          "District Courts"
        ],
        correctAnswerIndex: 2,
        feedback: [
          "The Supreme Court can, but so can the High Courts.",
          "High Courts do, but so does the Supreme Court.",
          "Correct! Both Supreme Court (Article 32) and High Courts (Article 226) can issue writs.",
          "District courts do not have this power."
        ]
      }
    ]
  }
];

export default fundamentalRights;
