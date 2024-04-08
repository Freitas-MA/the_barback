import type { useRouter } from 'next/navigation';
interface FileObject {
    name: string
    bucket_id: string
    owner: string
    id: string
    updated_at: string
    created_at: string
    last_accessed_at: string
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    metadata: Record<string, any>
}

export type RestoredImage = FileObject

export interface Drink {
	strDrink: string;
	idDrink: string;
	strCategory: string;
	strAlcoholic: string;
	strInstructions: string;
	strDrinkThumb: string;
	strIngredient1: string | null;
	strIngredient2: string | null;
	strIngredient3: string | null;
	strIngredient4: string | null;
	strIngredient5: string | null;
	strIngredient6: string | null;
	strIngredient7: string | null;
	strIngredient8: string | null;
	strIngredient9: string | null;
	strIngredient10: string | null;
	strIngredient11: string | null;
	strIngredient12: string | null;
	strIngredient13: string | null;
	strIngredient14: string | null;
	strIngredient15: string | null;
	strMeasure1: string | null;
	strMeasure2: string | null;
	strMeasure3: string | null;
	strMeasure4: string | null;
	strMeasure5: string | null;
	strMeasure6: string | null;
	strMeasure7: string | null;
	strMeasure8: string | null;
	strMeasure9: string | null;
	strMeasure10: string | null;
	strMeasure11: string | null;
	strMeasure12: string | null;
	strMeasure13: string | null;
	strMeasure14: string | null;
	strMeasure15: string | null;
}

export interface FormattedDrink {
	idDrink: string;
	strDrink: string;
	strCategory: string;
	strAlcoholic: string;
	instructions: string;
	strDrinkThumb: string;
	recipe: { [ingredient: string]: string };
}
// // Create the AppRouterInstance type// types.ts or any other appropriate location


declare module 'next/router' {
  interface Router {
    events: {
      on(event: 'routeChangeStart', callback: (url: string, { shallow }: { shallow: boolean }) => void): void;
      on(event: 'routeChangeComplete', callback: (url: string, { shallow }: { shallow: boolean }) => void): void;
      on(event: 'routeChangeError', callback: (err: any, url: string) => void): void;
      on(event: 'beforeHistoryChange', callback: (url: string) => void): void;
      off(event: 'routeChangeStart', callback: (url: string, { shallow }: { shallow: boolean }) => void): void;
      off(event: 'routeChangeComplete', callback: (url: string, { shallow }: { shallow: boolean }) => void): void;
      off(event: 'routeChangeError', callback: (err: any, url: string) => void): void;
      off(event: 'beforeHistoryChange', callback: (url: string) => void): void;
    };
  }
}

export type AppRouterInstance = Router;