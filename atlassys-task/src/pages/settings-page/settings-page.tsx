import Form from '@/components/form/form';
import Menu from '@/components/menu/menu';
import Header from '@components/header/header';

function SettingsPage() {
  return (
    <div className='settings-page__wrapper'>
      <header>
        <Header />
      </header>
      <aside>
        <Menu />
      </aside>
      <main>
        <Form />
      </main>
    </div>
  );
}

export default SettingsPage;
