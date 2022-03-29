const pc_member = {
      state: {
            pcMember: {
                  titre: "PC MEMBER",
                  paragraphe: [
                        {
                              text: "SCAM 2022",
                              link: "http://www.ieee-scam.org/2022/",
                        },
                        {
                              text: "Promise'22 ",
                              link: "https://promiseconf.github.io/2022/index.html",
                        },
                        {
                              text: "MSR 2021, 2022",
                              link: "https://2021.msrconf.org/",
                        },
                        {
                              text: "SANER 2020 and 2022",
                              link: "https://saner2020.csd.uwo.ca/",
                        },
                        {
                              text: "CASCON 2019, 2020, and 2021.",
                              link: "https://www-01.ibm.com/ibm/cas/cascon/",
                        },
                        {
                              text: "MSR 2018 Data Showcase",
                              link: "https://2018.msrconf.org/track/msr-2018-Data-Showcase-Papers",

                        },
                        {
                              text: "Greens 2018",
                              link: "http://greens.cs.vu.nl/",

                        },
                        {
                              text: "MSR 2017 Mining Challenge",
                              link: "http://2017.msrconf.org/#/challenge",

                        },
                  ]
            },
      },
      getters: {
            GET_PC_MEMBER: (state, payload) => state.pcMember,
      }
}

export default pc_member;
