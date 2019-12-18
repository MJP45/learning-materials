import { IProject, IScenario, IFeature, IRegisteredProject } from 'src/app/services/project.service';
import { ISnapshot } from 'src/app/services/snapshot.service';

export const mockProjectOne: IProject = {
  name: "Allotment build",
  id: "1",
  status: "UAT",
  features: [
    {
      name: "Bank Account - Deposit",
      id: "1",
      description:
        "As a user, \n\tI want to deposit money in my bank account,\n\tSo that I can store my savings securely somewhere other than under my bed.",
      scenarios: [
        {
          name: "User can deposit money on top of an existing balance",
          steps: [
            {
              keyword: "Given",
              text: "A bank account with starting balance of $100"
            },
            {
              keyword: "When ",
              text: "$100 is deposited"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $200"
            }
          ],
          testStatus: "Passed"
        },
        {
          name: "User can deposit money with a starting balance of zero",
          steps: [
            {
              keyword: "Given ",
              text: "A bank account with starting balance of $0"
            },
            {
              keyword: "When ",
              text: "$1100 is deposited"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $1100"
            }
          ],
          testStatus: "Failed"
        },
        {
          name: "User cannot deposit above their account limit",
          steps: [
            {
              keyword: "Given",
              text: "A bank account with starting balance of $5000"
            },
            {
              keyword: "When ",
              text: "$100 is deposited"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $5000"
            },
            {
              keyword: "And ",
              text: "The bank is alerted that the user is naughty"
            }
          ],
          testStatus: "Failed"
        }
      ],
      status: "Pending sign off"
    },
    {
      name: "Bank Account - Withdraw",
      id: "2",
      description:
        "As a user, \n\tI want to withdraw money from my bank account,\n\tSo that I can pay for a great many things.",
      scenarios: [
        {
          name: "User can withdraw money while my balance is above 0",
          steps: [
            {
              keyword: "Given",
              text: "A bank account with starting balance of $100"
            },
            {
              keyword: "When ",
              text: "$50 is withdrawn"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $50"
            }
          ],
          testStatus: "Passed"
        },
        {
          name: "User cannot be overdrawn",
          steps: [
            {
              keyword: "Given ",
              text: "A bank account with starting balance of $50"
            },
            {
              keyword: "When ",
              text: "$100 is withdrawn"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $50"
            },
            {
              keyword: "And ",
              text: "The user should be put on a list"
            }
          ],
          testStatus: "Pending"
        }
      ],
      status: "Pending sign off"
    }
  ]
};

export const mockFeatureOne: IFeature = {
  name: "Bank Account - Deposit",
  id: "1",
  description:
    "As a user, \n\tI want to deposit money in my bank account,\n\tSo that I can store my savings securely somewhere other than under my bed.",
  scenarios: [
    {
      name: "User can deposit money on top of an existing balance",
      steps: [
        {
          keyword: "Given",
          text: "A bank account with starting balance of $100"
        },
        {
          keyword: "When ",
          text: "$100 is deposited"
        },
        {
          keyword: "Then ",
          text: "The bank account balance should be $200"
        }
      ],
      testStatus: "Passed"
    },
    {
      name: "User can deposit money with a starting balance of zero",
      steps: [
        {
          keyword: "Given ",
          text: "A bank account with starting balance of $0"
        },
        {
          keyword: "When ",
          text: "$1100 is deposited"
        },
        {
          keyword: "Then ",
          text: "The bank account balance should be $1100"
        }
      ],
      testStatus: "Failed"
    },
    {
      name: "User cannot deposit above their account limit",
      steps: [
        {
          keyword: "Given",
          text: "A bank account with starting balance of $5000"
        },
        {
          keyword: "When ",
          text: "$100 is deposited"
        },
        {
          keyword: "Then ",
          text: "The bank account balance should be $5000"
        },
        {
          keyword: "And ",
          text: "The bank is alerted that the user is naughty"
        }
      ],
      testStatus: "Failed"
    }
  ],
    status: "Pending sign off"
};

export const mockFeatureTwo: IFeature = {
  name: "Savings Account - Create",
  id: "1",
  description:
    "As a user, \n\tI want to deposit money in my savings account,\n\tSo that I can store my savings securely to buy moss with.",
  scenarios: [
    {
      name: "User can create a savings account",
      steps: [
        {
          keyword: "Given",
          text: "A customer owning a normal bank account"
        },
        {
          keyword: "When ",
          text: "A user wants to open a savings (ISA) account"
        },
        {
          keyword: "Then ",
          text: "They can do so via contacting our team or online "
        }
      ],
      testStatus: "Passed"
    },
    {
      name: "User can recieve a new card for their ISA",
      steps: [
        {
          keyword: "Given ",
          text: "An ISA account"
        },
        {
          keyword: "When ",
          text: "A customer opens one"
        },
        {
          keyword: "Then ",
          text: "They can order a new ISA card"
        }
      ],
      testStatus: "Passed"
    },
    {
      name: "User can spend money on things",
      steps: [
        {
          keyword: "Given",
          text: "A customer wanting to buy a new collection of mosses"
        },
        {
          keyword: "When ",
          text: "The customer uses their ISA card"
        },
        {
          keyword: "Then ",
          text: "Then, we let them spend their savings because we are a bad bank"
        },
        {
          keyword: "And ",
          text: "Then we get found out and end up on BBC news and fined for selling the customer a product with false advertising"
        }
      ],
      testStatus: "Pending"
    }
  ],
  status: "Pending sign off"
};

export const mockScenarioOne: IScenario = {
  name: "User can withdraw money while my balance is above 0",
  steps: [
    {
      keyword: "Given",
      text: "A bank account with starting balance of $100"
    },
    {
      keyword: "When ",
      text: "$50 is withdrawn"
    },
    {
      keyword: "Then ",
      text: "The bank account balance should be $50"
    }
  ],
  testStatus: "Passed"
};

export const mockProjectTwo: IProject = {
  name: "Greenhouse build",
  id: "DEF",
  status: "SIT",
  features: [
    {
      name: "Bank Account - Deposit",
      id: "1",
      description:
        "As a user, \n\tI want to deposit money in my bank account,\n\tSo that I can store my savings securely somewhere other than under my bed.",
      scenarios: [
        {
          name: "User can deposit money with a starting balance of zero",
          steps: [
            {
              keyword: "Given ",
              text: "A bank account with starting balance of $0"
            },
            {
              keyword: "When ",
              text: "$1100 is deposited"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $1100"
            }
          ],
          testStatus: "Failed"
        },
        {
          name: "User cannot deposit above their account limit",
          steps: [
            {
              keyword: "Given",
              text: "A bank account with starting balance of $5000"
            },
            {
              keyword: "When ",
              text: "$100 is deposited"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $5000"
            },
            {
              keyword: "And ",
              text: "The bank is alerted that the user is naughty"
            }
          ],
          testStatus: "Failed"
        }
      ],
      status: "Pending sign off"
    },
    {
      name: "Bank Acccount - Withdraw",
      id: "2",
      description:
        "As a user, \n\tI want to withdraw money from my bank account,\n\tSo that I can pay for a great many things.",
      scenarios: [
        {
          name: "User can withdraw money while my balance is above 0",
          steps: [
            {
              keyword: "Given",
              text: "A bank account with starting balance of $100"
            },
            {
              keyword: "When ",
              text: "$50 is withdrawn"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $50"
            }
          ],
          testStatus: "Passed"
        },
        {
          name: "User cannot be overdrawn",
          steps: [
            {
              keyword: "Given ",
              text: "A bank account with starting balance of $50"
            },
            {
              keyword: "When ",
              text: "$100 is withdrawn"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $50"
            },
            {
              keyword: "And ",
              text: "The user should be put on a list"
            }
          ],
          testStatus: "Pending"
        }
      ],
      status: "Pending sign off"
    }
  ]
};

export const mockProjectThree: IProject = {
  name: "Patio build",
  id: "GHI",
  status: "Development",
  features: [
    {
      name: "Bank Acccount - Deposit",
      id: "1",
      description:
        "As a user, \n\tI want to deposit money in my bank account,\n\tSo that I can store my savings securely somewhere other than under my bed.",
      scenarios: [
        {
          name: "User can deposit money with a starting balance of zero",
          steps: [
            {
              keyword: "Given ",
              text: "A bank account with starting balance of $0"
            },
            {
              keyword: "When ",
              text: "$1100 is deposited"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $1100"
            }
          ],
          testStatus: "Failed"
        },
        {
          name: "User cannot deposit above their account limit",
          steps: [
            {
              keyword: "Given",
              text: "A bank account with starting balance of $5000"
            },
            {
              keyword: "When ",
              text: "$100 is deposited"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $5000"
            },
            {
              keyword: "And ",
              text: "The bank is alerted that the user is naughty"
            }
          ],
          testStatus: "Failed"
        }
      ],
      status: "Pending sign off"
    }
  ]
};

export const mockProjectFour: IProject = {
  name: "Watering Can build",
  id: "jkl",
  status: "Development",
  features: [
    {
      name: "watering plants - fill can",
      id: "1",
      description:
        "As a user, \n\tI want to put water in my watering can,\n\tSo that I can water my plants",
      scenarios: [
        {
          name: "User can deposit water in an empty can",
          steps: [
            {
              keyword: "Given ",
              text: "A watering can with amount of water at 0"
            },
            {
              keyword: "When ",
              text: "1 litre is deposited"
            },
            {
              keyword: "Then ",
              text: "The watering can should have one litre"
            }
          ],
          testStatus: "Failed"
        },
        {
          name: "User cannot fill can above 2 litres",
          steps: [
            {
              keyword: "Given",
              text: "a watering can with 2 litres of water"
            },
            {
              keyword: "When ",
              text: "1 litre is desposited"
            },
            {
              keyword: "Then ",
              text: "user's feet are wet"
            },
            {
              keyword: "And ",
              text: "The user regrets wearing flip flops"
            }
          ],
          testStatus: "Passed"
        }
      ],
      status: "Pending sign off"
    }
  ]
};

export const mockProjectFive: IProject = {
  name: "Ornamental Rock Garden",
  id: "mno",
  status: "Production",
  features: [
    {
      name: "decorate rocks with Moss",
      id: "1",
      description:
        "As a user, \n\tI want to decorate my rocks with Moss so I can create a pleasing montage of earthy colors",
      scenarios: [
        {
          name: "User can add Moss to rocks",
          steps: [
            {
              keyword: "Given ",
              text: "A rock with no moss"
            },
            {
              keyword: "When ",
              text: "2 moss pots are deposited"
            },
            {
              keyword: "Then ",
              text: "The rock should have 2 Moss pots"
            }
          ],
          testStatus: "Passed"
        },
        {
          name: "User can remove Moss",
          steps: [
            {
              keyword: "Given",
              text: "a Rock with 1 peice of Moss"
            },
            {
              keyword: "When ",
              text: "the Moss is removed"
            },
            {
              keyword: "Then ",
              text: "the amount of Moss on Rock is 0"
            }
          ],
          testStatus: "Passed"
        }
      ],
      status: "Pending sign off"
    }
  ]
};

export const mockProjectOneSn1: IProject = {
  name: "Allotment build",
  id: "1",
  status: "Production",
  features: [
    {
      id: "1",
      name: "Bank Account - Gold Deposit",
      description:
        "As a user, \n\tI want to deposit money in my bank account,\n\tSo that I can store my savings securely somewhere other than under my bed.",
      scenarios: [
        {
          name: "User can deposit gold bars on top of an existing balance",
          steps: [
            {
              keyword: "Given",
              text: "A bank account with starting balance of $100"
            },
            {
              keyword: "When ",
              text: "$200 of gold bars is deposited"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $200"
            }
          ],
          testStatus: "Failed"
        },
        {
          name: "User can deposit money with a starting balance of zero",
          steps: [
            {
              keyword: "Given ",
              text: "A bank account with starting balance of $0"
            },
            {
              keyword: "When ",
              text: "$1100 is deposited"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $1100"
            }
          ],
          testStatus: "Failed"
        },
        {
          name: "User cannot deposit above their account limit",
          steps: [
            {
              keyword: "Given",
              text: "A bank account with starting balance of $5000"
            },
            {
              keyword: "When ",
              text: "$100 is deposited"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $5000"
            },
            {
              keyword: "And ",
              text: "The bank is alerted that the user is naughty"
            }
          ],
          testStatus: "Failed"
        }
      ],
      status: "Pending sign off"
    },
    {
      id: "2",
      name: "Bank Account - Withdraw",
      description:
        "As a user, \n\tI want to withdraw money from my bank account,\n\tSo that I can pay for a great many things.",
      scenarios: [
        {
          name: "User can withdraw money while my balance is above 0",
          steps: [
            {
              keyword: "Given",
              text: "A bank account with starting balance of $100"
            },
            {
              keyword: "When ",
              text: "$50 is withdrawn"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $50"
            }
          ],
          testStatus: "Failed"
        },
        {
          name: "User cannot be overdrawn",
          steps: [
            {
              keyword: "Given ",
              text: "A bank account with starting balance of $50"
            },
            {
              keyword: "When ",
              text: "$100 is withdrawn"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $50"
            },
            {
              keyword: "And ",
              text: "The user should be put on a list"
            }
          ],
          testStatus: "Passed"
        }
      ],
      status: "Pending sign off"
    }
  ]
};

export const mockProjectOneSn2: IProject = {
  name: "Allotment build",
  id: "1",
  status: "UAT",
  features: [
    {
      id: "1",
      name: "Bank Account - Silver Deposit",
      description:
        "As a user, \n\tI want to deposit money in my bank account,\n\tSo that I can store my savings securely somewhere other than under my bed.",
      scenarios: [
        {
          name: "User can deposit silver bars on top of an existing balance",
          steps: [
            {
              keyword: "Given",
              text: "A bank account with starting balance of $100"
            },
            {
              keyword: "When ",
              text: "$200 of silver bars is deposited"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $200"
            }
          ],
          testStatus: "Passed"
        },
        {
          name: "User can deposit money with a starting balance of zero",
          steps: [
            {
              keyword: "Given ",
              text: "A bank account with starting balance of $0"
            },
            {
              keyword: "When ",
              text: "$1100 is deposited"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $1100"
            }
          ],
          testStatus: "Failed"
        },
        {
          name: "User cannot deposit above their account limit",
          steps: [
            {
              keyword: "Given",
              text: "A bank account with starting balance of $5000"
            },
            {
              keyword: "When ",
              text: "$100 is deposited"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $5000"
            },
            {
              keyword: "And ",
              text: "The bank is alerted that the user is naughty"
            }
          ],
          testStatus: "Failed"
        }
      ],
      status: "Pending sign off"
    },
    {
      id: "2",
      name: "Bank Account - Withdraw",
      description:
        "As a user, \n\tI want to withdraw money from my bank account,\n\tSo that I can pay for a great many things.",
      scenarios: [
        {
          name: "User can withdraw money while my balance is above 0",
          steps: [
            {
              keyword: "Given",
              text: "A bank account with starting balance of $100"
            },
            {
              keyword: "When ",
              text: "$50 is withdrawn"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $50"
            }
          ],
          testStatus: "Passed"
        },
        {
          name: "User cannot be overdrawn",
          steps: [
            {
              keyword: "Given ",
              text: "A bank account with starting balance of $50"
            },
            {
              keyword: "When ",
              text: "$100 is withdrawn"
            },
            {
              keyword: "Then ",
              text: "The bank account balance should be $50"
            },
            {
              keyword: "And ",
              text: "The user should be put on a list"
            }
          ],
          testStatus: "Pending"
        }
      ],
      status: "Pending sign off"
    }
  ]
};

export const projects: IProject[] = [
  mockProjectOne,
  mockProjectTwo,
  mockProjectThree,
  mockProjectFour,
  mockProjectFive
];

export const mockSnapShotOne: ISnapshot = {
  dateTime: "12/11/2019, 13:01:02",
  createdBy: "Barry Scott",
  project: mockProjectOneSn1
};

export const mockSnapShotTwo: ISnapshot = {
  dateTime: "01/11/2019, 11:01:02",
  createdBy: "Harry Paulson",
  project: mockProjectOneSn2
};

export const snapshots: ISnapshot[] = [
  mockSnapShotOne,
  mockSnapShotTwo
]

export const mockBitBucketOne: IRegisteredProject = {
  appName: "Allotment build",
  bitBucketName: "Allotment",
  date: "11/14/2019, 14:50:59",
  token: "ifdsf763TDknfe"
}