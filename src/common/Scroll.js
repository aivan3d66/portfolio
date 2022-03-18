import React from "react";
import {Link, Element, Events, animateScroll as scroll, scroller} from 'react-scroll';
import style from './../components/Header/Header.module.scss';
import {AboutMe} from "../components/AboutMe/AboutMe";
import {Skills} from "../components/Skills/Skills";
import {Works} from "../components/Works/Works";
import {Contacts} from "../components/Contacts/Contacts";
import {Employ} from "../components/Employ/Employ";
import {FaChevronUp} from "react-icons/fa";

export class HeaderSection extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <section className={style.headerContainer}>
        <div className={style.headerWrapper} id="bs-example-navbar-collapse-1">
          <ul className={style.navList}>
            <li>
              <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true}
                    duration={500}>Main</Link>
            </li>
            <li>
              <Link activeClass="active" className="test2" to="test2" spy={true} smooth={true}
                    duration={500}>Skills</Link>
            </li>
            <li>
              <Link activeClass="active" className="test3" to="test3" spy={true} smooth={true}
                    duration={500}>Works</Link>
            </li>
            <li>
              <Link activeClass="active" className="test4" to="test4" spy={true} smooth={true}
                    duration={500}>Contacts</Link>
            </li>
          </ul>
        </div>

        <Element name="test1" className="element">
          <AboutMe/>
        </Element>

        <Element name="test2" className="element">
          <Skills/>
        </Element>

        <Element name="test3" className="element">
          <Works/>
        </Element>

        <Element name="test4" className="element">
          <Employ/>
        </Element>

        <Element name="test5" className="element">
          <Contacts/>
        </Element>

        <a onClick={this.scrollToTop} className={style.scrollButton}>
          <FaChevronUp/>
          <span>
            to the top!
          </span>
        </a>
      </section>
    );
  }
}
