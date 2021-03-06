import manifest from '@neos-project/neos-ui-extensibility';
import { PageHasEditsButton } from './Components/PageHasEditsButton';
import { PageEditsOverviewModal } from "./Components/PageEditsOverviewModal";
import {reducer} from './redux';
import {watchGetNodeChanges} from "./sagas";

manifest('PunktDe.EditConflictPrevention:HighlightNonEditablePage', {}, globalRegistry => {
    const sagasRegistry = globalRegistry.get('sagas');
    sagasRegistry.set('punktde/editconflictprevention/nodeHasChanges', {
        saga: watchGetNodeChanges,
    });

    const reducersRegistry = globalRegistry.get('reducers');
    reducersRegistry.set('punktde/editconflictprevention', {reducer});

    const containerRegistry = globalRegistry.get('containers');
    containerRegistry.set('SecondaryToolbar/Right/NonEditableContent', PageHasEditsButton());
    containerRegistry.set('Modals/PageHasEditsModal', PageEditsOverviewModal());
});

