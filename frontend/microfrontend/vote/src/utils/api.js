class Api {
 constructor() {
  }
  changeLikeCardStatus(cardID, like) {
    // Обычная реализация: 2 разных метода для удаления и постановки лайка.
    return fetch(`${this._address}/${this._groupId}/cards/like/${cardID}`, {
      method: like ? 'PUT' : 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
  }
}

const api = new Api();

export default api;
