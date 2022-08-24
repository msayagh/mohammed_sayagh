const reviewer_for = {
      state: {
            reviewFor: {
                  titre: "Reviewer for",
                  paragraphe: [
                        {
                              text: "IEEE Transactions on Software Engineering (TSE)",
                              link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=32",
                        },
                        {
                              text: "ACM Transactions on Software Engineering and Methodology (TOSEM)",
                              link: "https://dl.acm.org/journal/tosem",
                        },
                        {
                              text: "Empirical Software Engineering (EMSE)",
                              link: "https://link.springer.com/journal/10664",
                        },
                        {
                              text: "IEEE Transactions on Dependable and Secure Computing (TDSC)",
                              link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8858",
                        },
                        {
                              text: "Journal of Systems and Software (JSS)",
                              link: "https://ees.elsevier.com/jss/default.asp",
                        },
                        {
                              text: "IEEE Software",
                              link: "https://www.computer.org/csdl/magazine/so",
                        },
                  ]
            },
      },
      getters: {
            GET_REVIEW_FOR: (state, payload) => state.reviewFor,
      }
}

export default reviewer_for;
