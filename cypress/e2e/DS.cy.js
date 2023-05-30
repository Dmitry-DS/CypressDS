describe('Перевірка, що на сторінці https://rozetka.com.ua/ua/ є текст “Доставка по всій Україні”', () => {
  it('текст “Доставка по всій Україні”', () => {

cy.visit('https://rozetka.com.ua/');

cy.get('head title').should('include.text', 'Інтернет-магазин ROZETKA™: офіційний сайт найпопулярнішого онлайн-гіпермаркету в Україні')

cy.get('head meta[name=description]')
  .should('have.attr', 'content')
  .should('include', 'Доставка по всій Україні')
  });
});

