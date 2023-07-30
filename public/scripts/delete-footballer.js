import displayFootballers from './loadFootballers.js';

export default async function deleteFootballerHandler() {
  const footballerID = this.parentElement.getAttribute('data-id');
  await fetch(
    `http://localhost:${window.location.port}/api/footballers/` + footballerID,
    {
      method: 'DELETE',
    }
  );
  displayFootballers();
}
