import Form from '@/components/form/form';
import Menu from '@/components/menu/menu';
import Header from '@components/header/header';

function SettingsPage() {
  return (
    <div className='settings-page__wrapper'>
      <header  className='settings-page__header'>
        <Header />
      </header>
      <aside className='settings-page__side-menu'>
        <Menu />
      </aside>
      <main className='settings-page__content'>
        <Form />
      </main>
    </div>
  );
}

export default SettingsPage;
