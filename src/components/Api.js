export default class Api {
    constructor(options) {
        this._url =  options.url;
        this._headers = options.headers; 
    }

    _response(res) {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      }

      getUserInfo(){
        return fetch(`${this._url}/users/me`, {
          headers: this._headers
        })
        .then(this._response);
      }

      getInitialCards() {
        return fetch(`${this._url}/cards`, { 
          headers: this._headers 
        })
        .then(this._response);
      }

      editUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            name: data.username,
            about: data.userjob
          })
        })
        .then(this._response);
      }

      addNewCard(data){
        return fetch(`${this._url}/cards`, {
          method: 'POST', 
          headers: this._headers,
          body: JSON.stringify({
            name: data.name,
            link: data.link
          })
        })
        .then(this._response);
      }

      deleteCard(cardId){
        return fetch(`${this._url}/cards/${cardId}`, {
          method: 'DELETE',
          headers: this._headers,
        })
        .then(this._response);
      }

      putLike(cardId){
        return fetch(`${this._url}/cards/${cardId}/likes`,{
          method: 'PUT',
          headers: this._headers,
        })
        .then(this._response);
      }

      removeLike(cardId){
        return fetch(`${this._url}/cards/${cardId}/likes`, {
          method: 'DELETE', 
          headers: this._headers,
        })
        .then(this._response);
      }

      editUserAvatar(data){
        return fetch(`${this._url}/users/me/avatar`, {
          method: 'PATCH', 
          headers: this._headers,
          body: JSON.stringify({
            avatar: data.editAvatar
          })
        })
        .then(this._response);
      }
}