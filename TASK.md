https://docs.google.com/document/d/1kIyDuSh9G1LOnKvf5FqXdTQ2jWw3HQwUByutoGAwBQs/edit

Тестовое‌ ‌задание‌ ‌на‌ ‌vue‌ ‌js.‌

Нужно‌ ‌сделать‌ ‌страницу‌ ‌вывода‌ ‌юзеров‌ ‌с‌ ‌пагинацией‌ ‌и‌ ‌поиском.‌

1. Должен‌ ‌быть‌ ‌выбор‌ ‌количества‌ ‌элементов‌ ‌на‌ ‌странице‌ ‌(обычный‌ ‌select‌ ‌с‌ изначально‌ ‌заданными‌ ‌option‌ ‌-‌ ‌5,‌ ‌10,‌ ‌20‌ ‌…‌

2. В‌ ‌пагинации‌ ‌по‌ ‌краям‌ ‌должны‌ ‌быть‌ ‌кнопки‌ ‌prev,‌ ‌next.‌ ‌Делать‌ ‌неактивными‌ (disabled)‌ ‌эти‌ ‌кнопки‌ ‌если‌ ‌страниц‌ ‌дальше‌ ‌нет.‌

3. Ссылка‌ ‌на‌ ‌получение‌ ‌юзеров‌ ‌(всех)‌ ‌-‌ ‌‌https://reqres.in/api/users?page=1.‌ ‌(итд‌ вместо‌ ‌page=N)‌ ‌Отдельных‌ ‌методов‌ ‌api‌ ‌на‌ ‌получение‌ ‌с‌ ‌пагинацией‌ ‌нет.‌ ‌Можно‌ сделать‌ ‌клиентскую‌ ‌разбивку‌ ‌на‌ ‌страницы.‌

4. Поиск‌ ‌нужно‌ ‌реализовать‌ ‌по‌ ‌всем‌ ‌юзерам‌ ‌сразу,‌ ‌искать‌ ‌по‌ ‌полю‌ ‌name.‌

5. Так‌ ‌же‌ ‌при‌ ‌разработке‌ ‌нужно‌ ‌использовать‌ ‌git.‌

Дополнительное‌ ‌задание:‌

Реализовать‌ ‌отдельную‌ ‌страницу‌ ‌для‌ ‌юзера‌ ‌из‌ ‌списка‌ ‌с‌ ‌полной‌ ‌информацией‌ ‌о‌ ‌нем.‌

Так‌ ‌же‌ ‌должна‌ ‌быть‌ ‌возможность‌ ‌вернутся‌ ‌на‌ ‌страницу‌ ‌со‌ ‌списком‌ ‌(‌что‌ ‌то‌ ‌наподобие‌ хлебных‌ ‌крошек)‌

Стек:‌

Vue‌ ‌cli‌ ‌(‌https://cli.vuejs.org/)
Vuex (https://vuex.vuejs.org/ru/guide/)
Vue-route‌ ‌*для‌ ‌доп.‌ ‌задания*‌ ‌(‌https://router.vuejs.org/ru/)
Axios (https://github.com/axios/axios)


TODO/NOTES:
- resp: {"page":1,"per_page":20,"total":12,"total_pages":1,"data":[{"id":1,"email":"xx@yy.in","first_name":"George","last_name":"Bluth","avatar":"https://s3.amazonaws.../128.jpg"},
- &per_page=20
- после отрендеривания 1 чанка данных, запустить цикл таймера который через небольшие интервалы догрузит в фоне остальное

this.$API.get('users', {
  params: {
    per_page: 2
  }
}).then(res => {
  console.log('*res', res)
})

- https://reqres.in/api/users/1