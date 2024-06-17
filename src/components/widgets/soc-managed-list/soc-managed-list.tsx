import { SoCManagedListProps, FilterState } from './types';
import AbcSelector from '../abc-selector/abc-selector';
import VendorsList from '../vendors-list/vendors-list';
import SoCList from '../soc-list/soc-list';
import {useState} from 'preact/hooks';

const SoCManagedList = (props: SoCManagedListProps) => {
  const { fullList } = props;
  const emptyFilter: FilterState = {
    abcSelector: 'Recommended',
    vendorSelector: null,
  };

  const letters = [...(new Set(fullList.map(soc => soc.vendor.charAt(0).toUpperCase())))];

  const [filterState, setFilterState] = useState<FilterState>(emptyFilter);

  const handleLetterClick = (letter: string) => {
    setFilterState({...filterState, abcSelector: letter, vendorSelector: null});
  }

  const handleVendorClick = (vendor: string) => {
    console.log('vendor clicked: ', vendor);
    setFilterState({...filterState, vendorSelector: vendor});
  }


  const getVendorsList = (filterState: FilterState, fullList: SoCManagedListProps['fullList']) => {
    const { abcSelector } = filterState;
    const getUniqueSortedVendors = (vendors: SoCManagedListProps['fullList']) => {
      return vendors
        .map(soc => soc.vendor)
        .reduce((vendors: string[], vendor: string): string[] => {
          return vendors.includes(vendor) ? vendors : [...vendors, vendor];
        }, [])
        .sort();
    }

    if (abcSelector === null || abcSelector === 'Full list') return getUniqueSortedVendors(fullList);

    if (abcSelector === 'Recommended') {
      return getUniqueSortedVendors(fullList.filter(soc => soc.featured));
    }

    return getUniqueSortedVendors(fullList.filter(soc => soc.vendor.charAt(0).toLowerCase() === abcSelector.toLowerCase()));
  }

  const getSoCsList = (filterState: FilterState, fullList: SoCManagedListProps['fullList']): SoCManagedListProps['fullList'] => {
    const { abcSelector, vendorSelector } = filterState;

    const sortByModelDesc = (list: SoCManagedListProps['fullList']) => {
      const newList:SoCManagedListProps['fullList'] = [...list];
      newList.sort((a, b) => {
        const modelA = (`${a.vendor} ${a.model}`).toLowerCase();
        const modelB = (`${b.vendor} ${b.model}`).toLowerCase();
        if (modelA < modelB) return -1;
        if (modelA > modelB) return 1;
        return 0;
      });
      return newList;
    }

    if (abcSelector == null && vendorSelector == null) return sortByModelDesc(fullList);
    if (abcSelector && vendorSelector == null) {
      if (abcSelector === 'Full list') return sortByModelDesc(fullList);
      if (abcSelector === 'Recommended') return sortByModelDesc(fullList.filter(soc => soc.featured));
      return sortByModelDesc(fullList.filter(soc => soc.vendor.charAt(0).toLowerCase() === abcSelector.toLowerCase()));
    }
    return sortByModelDesc(fullList.filter(soc => soc.vendor.toLowerCase() === vendorSelector?.toLowerCase()));

  };

  return (
    <div className="flex flex-col justify-start items-start gap-4 border">
      <AbcSelector letters={letters} curSelected={filterState.abcSelector} clickHandler={handleLetterClick}/>
      <VendorsList list={getVendorsList(filterState, fullList)} clickHandler={handleVendorClick} curSelected={filterState.vendorSelector} />
      <SoCList list={getSoCsList(filterState, fullList)} />
    </div>
  );
}

export default SoCManagedList;
