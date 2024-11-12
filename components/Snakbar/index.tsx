import Icon from 'components/Icon';
import Text from 'components/Text';
import { m } from 'framer-motion';
import { useEffect, useState, FC } from 'react';

interface Props {
  isSubmitSuccessful: Boolean;
}

const Snackbar: FC<Props> = ({ isSubmitSuccessful }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(true);
    setTimeout(() => {
      setIsShown(false);
    }, 10000);
  }, []);

  if (!isShown) {
    return null;
  }
  return (
    <m.div
      animate={{ opacity: 1, translateY: '50px' }}
      className={`fixed p-3 text-sm ${
        isSubmitSuccessful ? 'bg-green-200' : 'bg-red-200'
      } rounded-sm z-20 top-7 right-5 max-w-[calc(100%_-_40px)] w-[500px]`}
      initial={{ opacity: 0, translateY: '0px' }}
      transition={{ duration: 1, ease: 'circInOut' }}
    >
      <div
        className={`inline-flex relative items-center ${
          isSubmitSuccessful ? 'text-green-700' : 'text-red-700'
        }`}
      >
        <button
          className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 border-2 border-black rounded-full"
          onClick={() => setIsShown(false)}
        >
          <Icon color="black" size={5} type="close" />
        </button>
        <svg
          className="flex-shrink-0 w-4 h-4 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            fillRule="evenodd"
          />
        </svg>
        <Text className="pr-8" styling="sm">
          {isSubmitSuccessful ? (
            'Hvala vam što ste nas kontaktirali! Cenimo Vaše interesovanje i javićemo vam se što je pre moguće.'
          ) : (
            <>
              Izvinjavamo se zbog neprijatnosti, ali izgleda da je došlo do
              greške pri slanju Vaše poruke. Pokušajte ponovo kasnije ili nas
              kontaktirajte direktno na broj telefona{' '}
              <a className="underline" href="tel:+381641219821">
                +381 64 12 19 821
              </a>{' '}
              ili na e-mail{' '}
              <a className="underline" href="mailto:nvnekretnine@gmail.com">
                nvnekretnine@gmail.com
              </a>
              .
              <br />
              Hvala na razumevanju.
            </>
          )}
        </Text>
      </div>
    </m.div>
  );
};

export default Snackbar;
