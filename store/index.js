import Vuex from "vuex";

import publications from './publication';
import technical_reports from './technical-reports';
import workshops from './workshops';
import other_publications from './other-publication';
import reviewer_for from './reviewer-for';
import pc_member from './pc-member';
import teaching from './teaching';
import other_activities from './other-activities';

const database = () => {
      return new Vuex.Store({
            state: {
                  
                  maintenance: {
                        state: true,
                        menuMobileState: false,
                        menuHamburgerState: false,
                        buttonNuxt: 'Read more',
                        animation: {
                              state : false,
                        },
                        head: {
                              title: 'DR.Mohamed SAYAGH',
                              meta: [{
                                    hid: 'site for DR.Mohamed SAYAGH',
                                    name: 'description',
                                    content: 'My custom description'
                              }]
                        },
                        pagePrincipal: {
                              title: 'main page',
                        },
                        menu: [
                              {
                                    titre: "Publications",
                                    state: true,
                              },
                              {
                                    titre: "Technical Reports",
                                    state: false,
                              },
                              {
                                    titre: "Workshops",
                                    state: false,
                              },
                              {
                                    titre: "Other Publications",
                                    state: false,
                              },
                              {
                                    titre: "Reviewer for",
                                    state: false,
                              },
                              {
                                    titre: "PC Member",
                                    state: false,
                              },
                              {
                                    titre: "Teaching",
                                    state: false,
                              },
                        ],
                  },
                  main: {
                        sousTitre: "ASSISTANT PROFESSOR AT ETS (QUÉBEC UNIVERSITY).",
                        titre: "mohammed sayagh",
                        image: {
                              link: "",
                              src: "~/assets/image_mohammed.png",
                              alt: ""
                        },
                        email: "sayaghmohammed@gmail.com",
                        paragraphe: [
                              {
                                    text: "I am an assistant professor at Ecole Technologie Supérieur - Québec University. Before that, I was working as a PostDoc fellow in"
                              },
                              {
                                    text: "the Software Analysis and Intelligence Lab (SAIL)",
                                    link: "https://sail.cs.queensu.ca/"
                              },
                              {
                                    text: "at"
                              },
                              {
                                    text: "Queen's University (Kingston, ON)",
                                    link: "http://queensu.ca/"
                              },
                              {
                                    text: "under the supervision of"
                              },
                              {
                                    text: "Prof. Ahmed E. Hassan.",
                                    link: "http://research.cs.queensu.ca/home/ahmed/home/"
                              },
                              {
                                    text: "I obtained my Ph.D. from"
                              },
                              {
                                    text: "the Maintenance, Construction, and Intelligence of Software lab (MCIS) ",
                                    link: "http://mcis.cs.queensu.ca/"
                              },
                              {
                                    text: "at"
                              },
                              {
                                    text: "Ecole Polytechnique (Montréal, QC)",
                                    link: "http://polymtl.ca/"
                              },
                              {
                                    text: "under the supervision of"
                              },
                              {
                                    text: "Prof. Bram Adams.",
                                    link: "http://mcis.cs.queensu.ca/bram.html"
                              },
                              {
                                    text: "I have a wide range of research interests that are related to empirical software engineering. My main research focus is related to the DevOps practices (e.g., configuration, log analysis) for multi-component software systems (e.g., microservices and distributed systems). My research is based on mining software repositories (e.g., Git, DockerHub, online forums, ...) and applying different qualitative and quantitative techniques (e.g., statistical analysis, machine learning, source code analysis) with the goal of recommending best practices and recommendation systems to improve software quality and reduce development and deployment costs."
                              },
                        ]

                  },
                  notification: {
                        state: true,
                        yourNotificationList: [
                              {
                                    state: true,
                                    date: {
                                          state: false,
                                          day: '28',
                                          month: '08',
                                          year: '2022'
                                    },
                                    text: 'I am currently looking for motivated and hard working PhD and Masters students.',
                                    button: [{
                                          // J'ai fais en sorte que ca marche pour un seul bouton
                                          // Je vais gerer pour deux bouton ou meme plus en cas de necessite
                                          state: true,
                                          buttonText: 'contact me',
                                          buttonLink: 'mailto:sayaghmohammed@gmail.com'
                                    },],
                              },
                        ]
                  },
            },
            modules: {
                  publications,
                  technical_reports,
                  workshops,
                  other_publications,
                  reviewer_for,
                  pc_member,
                  teaching,
                  other_activities
            },
            getters: {
                  GET_MAINTENANCE: (state, payload) => state.maintenance,
                  GET_MAIN: (state, payload) => state.main,
                  GET_NOTIFICATION: (state, payload) => state.notification,
            },
            mutations: {
                  GET_MAINTENANCE: (state, payload) => {
                        state.maintenance = payload;
                  },
                  GET_NOTIFICATION: (state, payload) => {
                        state.notification = payload;
                  },
            },
            actions: {
                  SET_MAINTENANCE: (context, payload) => {
                        context.commit("SET_MAINTENANCE", payload)
                  },
                  SET_NOTIFICATION: (context, payload) => {
                        context.commit("SET_NOTIFICATION", payload)
                  },
            }
      })
};

export default database;
