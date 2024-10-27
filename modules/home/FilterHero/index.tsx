import { useQuery } from '@tanstack/react-query';
import BackgroundImage from 'components/BackgroundImage';
import Button from 'components/FormElements/Button';
import CustomDropdown from 'components/FormElements/CustomDropdown';
import DualButtonRadio from 'components/FormElements/DualButtonRadio';
import Input from 'components/FormElements/Input';
import {
  getApartmentContentType,
  getCities,
  getListings
} from 'lib/fetchService';
import { useRouter } from 'next/router';
import React, { FC, useState, useEffect, useCallback } from 'react';

interface Props {
  variant?: string;
}

const FilterHero: FC<Props> = ({ variant }) => {
  const router = useRouter();
  const { grad, namena, tip, PovrsinaKvM } = router.query;

  const { data: citiesData } = useQuery(['cities'], getCities);
  const { data: apartmentContentType } = useQuery(
    ['apartmentContentType'],
    getApartmentContentType
  );

  const { data: filteredApartments, isLoading } = useQuery(
    ['apartments', grad, namena, tip, PovrsinaKvM],
    () =>
      getListings(
        grad as string,
        tip as string,
        namena as string,
        PovrsinaKvM as string
      ),
    {
      enabled: router.isReady
    }
  );

  const cityOptions = [
    { label: 'Svi gradovi', value: '' },
    ...(citiesData?.data?.map((city: any) => ({
      label: city.attributes.Naziv,
      value: city.attributes.Naziv
    })) || [])
  ];

  const typeOptions =
    apartmentContentType?.data?.schema.attributes.Tip.enum.map(
      (type: string) => ({
        label: type,
        value: type
      })
    ) || [];

  interface FormState {
    grad: string;
    namena: string;
    tip: string;
    PovrsinaKvM: string;
  }

  const [formState, setFormState] = useState<FormState>({
    PovrsinaKvM: '',
    grad: '',
    namena: '',
    tip: ''
  });

  useEffect(() => {
    if (router.isReady) {
      setFormState({
        PovrsinaKvM: (PovrsinaKvM as string) || '',
        grad: (grad as string) || '',
        namena: (namena as string) || '',
        tip: (tip as string) || ''
      });
    }
  }, [router.isReady, grad, namena, tip, PovrsinaKvM]);

  const handleSearch = useCallback(
    (state: FormState = formState) => {
      const queryParams = new URLSearchParams(
        Object.entries(state).reduce((acc, [key, value]) => {
          if (value) acc[key] = value.toString();
          return acc;
        }, {} as Record<string, string>)
      );
      router.push(`/search?${queryParams.toString()}`, undefined, {
        shallow: true
      });
    },
    [formState, router]
  );

  const handleChange =
    (field: keyof FormState) =>
    (
      selectedOption:
        | { value: string; label: string }
        | React.ChangeEvent<HTMLInputElement>
        | string
    ) => {
      const newFormState = { ...formState };
      if (typeof selectedOption === 'string') {
        newFormState[field] = selectedOption;
      } else if ('target' in selectedOption) {
        newFormState[field] = selectedOption.target.value;
      } else {
        newFormState[field] = selectedOption.value;
      }
      setFormState(newFormState);

      if (variant === 'small') handleSearch(newFormState);
    };

  const handlePovrsinaKvMChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormState((prev) => ({ ...prev, PovrsinaKvM: value }));
    if (variant === 'small') {
      handleSearch({ ...formState, PovrsinaKvM: value });
    }
  };

  if (variant === 'small') {
    return (
      <div className="relative z-10">
        <div className="grid grid-cols-2 gap-6 bg-white rounded-3xl">
          <DualButtonRadio
            onChange={(option) => handleChange('namena')(option.value)}
            options={[
              { label: 'Izdavanje', value: 'Izdavanje' },
              { label: 'Prodaja', value: 'Prodaja' }
            ]}
            selected={formState.namena}
          />
          <CustomDropdown
            onChange={(option) => handleChange('grad')(option)}
            options={cityOptions}
            placeholder="Izaberite lokaciju..."
            value={formState.grad}
          />
          <CustomDropdown
            onChange={(option) => handleChange('tip')(option)}
            options={typeOptions}
            placeholder="Tip"
            value={formState.tip}
          />
          <Input
            label="Od m2"
            onChange={handlePovrsinaKvMChange}
            type="number"
            value={formState.PovrsinaKvM}
          />
        </div>
        <div className="mt-8 font-bold text-end">
          {isLoading ? (
            <p>Loading results...</p>
          ) : (
            <p>Broj rezultata: {filteredApartments?.data?.length || 0}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-black">
      <BackgroundImage alt="hero background" opacity="40" src="/img/rent.jpg" />
      <div className="container relative text-white">
        <div className="pt-52">
          <h1 className="mb-20 text-5xl font-bold text-center">
            Pronadjite apartman ili kucu po zelji
          </h1>
          <div className="relative z-10 flex gap-6 p-10 -mb-24 bg-white rounded-[4rem] shadow-md">
            <div className="grid flex-1 grid-cols-4 gap-6">
              <DualButtonRadio
                defaultSelected={formState.namena}
                onChange={handleChange('namena')}
                options={[
                  { label: 'Izdavanje', value: 'Izdavanje' },
                  { label: 'Prodaja', value: 'Prodaja' }
                ]}
              />
              <CustomDropdown
                onChange={handleChange('grad')}
                options={cityOptions}
                placeholder="Izaberite lokaciju..."
              />
              <CustomDropdown
                onChange={handleChange('tip')}
                options={typeOptions}
                placeholder="Tip"
              />
              <Input
                label="Od m2"
                onChange={handleChange('PovrsinaKvM')}
                type="number"
                value={formState.PovrsinaKvM}
              />
            </div>
            <Button
              className="!p-3 rounded-full flex justify-center items-center"
              onClick={() => handleSearch(formState)}
            >
              <i className="w-6 h-6 bg-black icon icon-search" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterHero;
