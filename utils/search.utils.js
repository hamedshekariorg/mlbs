import hamrahAval from 'public/static/images/partners/hamrah-aval.svg';
import irancell from 'public/static/images/partners/irancell.svg';
import rightel from 'public/static/images/partners/rightel.svg';
import asmari from 'public/static/images/partners/asmari.svg';
import pasargad from 'public/static/images/partners/pasargad.svg';
import sahami from 'public/static/images/partners/sahami.svg';
import saman from 'public/static/images/partners/saman.svg';
import sos from 'public/static/images/partners/sos.svg';

export const PassengersSelectionOptions = [
  { id: 1, title: 'Adults' },
  { id: 2, title: 'Children' },
  { id: 3, title: 'Infants' },
];

export const guideTypes = [
  "I haven't decided yet",
  'Partially Guided',
  'Fully Guided',
];

export const translationOptions = [
  {
    l1: 'Chinese',
    l2: 'English',
    value: 1,
  },
  {
    l1: 'Chinese',
    l2: 'Persian',
    value: 2,
  },
  {
    l1: 'English',
    l2: 'Chinese',
    value: 3,
  },
  {
    l1: 'English',
    l2: 'Persian',
    value: 4,
  },
  {
    l1: 'Persian',
    l2: 'Chinese',
    value: 5,
  },
  {
    l1: 'Persian',
    l2: 'English',
    value: 6,
  },
];

export const insuranceTabPartners = [
  { value: 4, icon: saman },
  { value: 1, icon: asmari },
  { value: 3, icon: sahami },
  { value: 2, icon: pasargad },
  { value: 5, icon: sos },
];

export const simTabPartners = [
  { value: 1, icon: rightel },
  { value: 2, icon: irancell },
  { value: 3, icon: hamrahAval },
];

export const simTabPartnersSelection = [
  { value: 1, title: 'Rightel' },
  { value: 2, title: 'Irancell' },
  { value: 3, title: 'Hamrah Aval' },
];
