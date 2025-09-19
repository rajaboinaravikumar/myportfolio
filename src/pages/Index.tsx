import Portfolio from '@/components/Portfolio';
import DarkModeToggle from '@/components/DarkModeToggle';

const Index = () => {
  return (
    <div className="relative">
      <DarkModeToggle />
      <Portfolio />
    </div>
  );
};

export default Index;
