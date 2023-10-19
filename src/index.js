import './styles/_index.scss';
import './images/index.js';
import $ from 'jquery';

/* eslint prefer-arrow-callback: "off" */
$(function () {
  $(document).on('click', function (e) {
    if ($(e.target).hasClass('accordion__head')) {
      const accordionElement = $(e.target).parent();
      const accordionBody = accordionElement.find('.accordion__body');
      const isAccordionBodyOpen = accordionBody.hasClass(
        'accordion__body_is-open'
      );
      accordionBody.slideToggle();
      if (isAccordionBodyOpen) {
        accordionBody.attr('aria-hidden', 'true');
        accordionBody.removeClass('accordion__body_is-open');
        accordionBody.addClass('accordion__body_is-closed');
      } else {
        accordionBody.attr('aria-hidden', 'false');
        accordionBody.removeClass('accordion__body_is-closed');
        accordionBody.addClass('accordion__body_is-open');
      }
    }
  });
});
