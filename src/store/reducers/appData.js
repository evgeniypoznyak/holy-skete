import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  data: {
    english: {
      languageData: {
        pages: {
          auth: {
            name: 'Hello',
            placeholders: {
              email: 'Email',
              password: 'Password',
              submit: 'SUBMIT',
            },
          },
          cemetery: {},
          clergy: {},
          contactUs: {},
          directions: {},
          donations: {},
          homePage: {
            mainParagraph: [
              `The vigil lamp of church life in our Hermitage of the Holy Protection of the Mother of God was lit in 1953, when in the Southern New Jersey village of Buena Vista a church community was established, consisting primarily of Russian Cossacks who could not conceive of life and activities without their Orthodox traditions, divine services and missionary outreach.`,
              `The community set out to build a small church in the style of Russian Church architecture with a full-fledged parish and liturgical life, to establish a church school and apportion land for a cemetery where any Orthodox Christian could find a place for his eternal rest in the shadow of the church domes.`,
              `Parish life progressively developed in this manner for many decades. The peace and tranquility of the surroundings of the church and, with time, the decreasing number of active parishioners, has led to the realization that this location is an ideal spot for the establishment of a small monastic community. The relative isolation and distance from the tumult of a secular city favor the development here of traditional Russian monastic life and inner prayer.`,
              `Thus, with the blessing of His Eminence, Metropolitan Hilarion, the First Hierarch of the Russian Orthodox Church Outside of Russia, in 2015 the parish of the Protection of the Mother of God was transformed into the Hermitage of the Protection of the Mother of God with the establishment there of a monastic brotherhood dedicated to St. Varlaam, Abbot of Hutin, the Wonderworker of Novgorod. Hieromonk Tikhon (Gayfudinov) was appointed superior of the newly-established hermitage.`,
              `The Hermitage of the Protection of the Mother of God welcomes all faithful worshippers who desire to pray and labor for the glory of God in this holy place, every person who sincerely seeks a tranquil prayer life.`,
            ],
              mainPageSlideshowButtonText: 'SLIDESHOW',
          },
          skete: {},
        },
        menu: {
          menuHomePage: 'Home Page',
          menuSkete: 'Skete',
          menuCemetery: 'Cemetery',
          menuClergy: 'Abbot',
          menuDirections: 'Directions',
          menuContactUs: 'Contact Us',
          menuDonations: 'Make a donation',
        },
        switchLanguage: {
          switchLanguageRussian: 'Russian',
          switchLanguageEnglish: 'English',
        },
        topImage: {
          topImageUrl: '/images/top-header.jpg',
          topImageText: '',
        },
        calendar: {
          date: '',
          holidays: [],
          contentHtml: {
            voice: 'Voice',
          },
        },
        news: {
          newsContent: [],
          text: {
            readMore: 'Read more...',
          },
        },
        footer: {},
        notifications: {},
      },
    },
    russian: {
      languageData: {
        pages: {
          auth: {
            name: 'Привет',
            placeholders: {
              email: 'Емейл',
              password: 'Пароль',
              submit: 'ОТПРАВИТЬ',
            },
          },
          cemetery: {},
          clergy: {},
          contactUs: {},
          directions: {},
          donations: {},
          homePage: {
            mainParagraph: [
              `Лампада Церковной жизни в нашем Покровском Скиту затеплилась в далеком 1953 году, когда в Южном Нью-Джерси в местечке Бьюна Виста образовалась церковная община состоящая преимущественно из русских Казаков, которые не воспринимали свою жизнь и деятельность в отрыве от Православной традиции, от богослужебного и миссионерского служения`,
              `Собравшись вместе было принято решение возвести небольшой храм, который мог бы воплотить в себе опыт русского церковного зодчества, начать при нем полноценную приходскую и богослужебную деятельность, открыть церковную школу и выделить при храме место для кладбища, с тем, что бы каждый православный верующий, мог бы найти для себя тихое место вечного покоя в тени церковных куполов.`,
              `Таким образом приходская жизнь развивалась в течении многих десятилетий. Тишина и умиротворенность храмовой окрестности, а так же отсутсвие должного количества активных прихожан способствовали развитию идеи о том, что данное место вполне благоприятно для открытия здесь небольшой монашеской общины, с тем, что бы немноголюдность, удаленность от мирской городской суеты благоприятствовали бы развитию здесь традиционного русского монашеского делания, акцентированного прежде всего на глубине молитвенного подвига.`,
              `Таким образом в 2015 году, по благословению Высокопреосвященнейшего Митрополита Илариона, Первоиерарха Русской Зарубежной Церкви, Приход Покрова Пресвятой Богородицы преобразован в Покровский Скит с открытием при нем монашеского братства имени преподобного Варлаама игумена Хутынского Новгородского Чудотворца. Настоятелем новообразованного Скита назначен иеромонах Тихон ( Гайфудинов).`,
              `Скит Покрова Божией Матери открывает свои двери перед всяким богомольцем, желающем помолиться и потрудиться во Славу Божию на сем святом месте, перед всяким человеком, кто искренне ищет тихого молитвенного пристанища.`,
            ],
              mainPageSlideshowButtonText: 'СМОТРЕТЬ СЛАЙДШОУ',
          },
          skete: {},
        },
        menu: {
          menuHomePage: 'Главная',
          menuSkete: 'Скит',
          menuCemetery: 'Кладбище',
          menuClergy: 'Духовенство',
          menuDirections: 'Как добраться',
          menuContactUs: 'Связаться с нами',
          menuDonations: 'Пожертвовать',
        },
        switchLanguage: {
          switchLanguageRussian: 'Русский',
          switchLanguageEnglish: 'Английский',
        },
        topImage: {
          topImageUrl: '/images/top-header.jpg',
          topImageText: '',
        },
        calendar: {
          date: '',
          holidays: [],
          contentHtml: {
            voice: 'Глас',
          },
        },
        news: {
          newsContent: [],
          text: {
            readMore: 'Читать далее...',
          },
        },
        footer: {},
        notifications: {},
      },
    },
  },
};

const onDataReceived = (state, action) => {
  return updateObject(state, {
    data: action.data,
  });
};

const setupNewsFeed = (state, action) => {
  const objectToUpdate = {
    data: {
      ...state.data,
      russian: {
        ...state.data.russian,
        languageData: {
          ...state.data.russian.languageData,
          news: {
            ...state.data.russian.languageData.news,
            newsContent: action.news.russian,
          },
        },
      },
      english: {
        ...state.data.english,
        languageData: {
          ...state.data.english.languageData,
          news: {
            ...state.data.english.languageData.news,
            newsContent: action.news.english,
          },
        },
      },
    },
  };
  return updateObject(state, objectToUpdate);
};

const setupCalendar = (state, action) => {
  //console.log('action.calendar: ', action.calendar);
  const objectToUpdate = {
    data: {
      ...state.data,
      russian: {
        ...state.data.russian,
        languageData: {
          ...state.data.russian.languageData,
          calendar: {
            ...state.data.russian.languageData.calendar,
            date: action.calendar.dateRus,
            holidays: action.calendar.holidaysRus.holidays,
            saints: action.calendar.holidaysRus.saints,
            voice: action.calendar.holidaysRus.voice + '-й',
            week: action.calendar.holidaysRus.week,
          },
        },
      },
      english: {
        ...state.data.english,
        languageData: {
          ...state.data.english.languageData,
          calendar: {
            ...state.data.english.languageData.calendar,
            date: action.calendar.dateEng,
            holidays: action.calendar.holidaysEng.holidays,
            saints: action.calendar.holidaysEng.saints,
            voice: action.calendar.holidaysEng.voice + 'th',
            week: action.calendar.holidaysRus.week,
          },
        },
      },
    },
  };
  return updateObject(state, objectToUpdate);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DATA_RECEIVED:
      return onDataReceived(state, action);
    case actionTypes.SETUP_NEWS_FEED:
      return setupNewsFeed(state, action);
    case actionTypes.SETUP_CALENDAR:
      return setupCalendar(state, action);
    default:
      return state;
  }
};

export default reducer;