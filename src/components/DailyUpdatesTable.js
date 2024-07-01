import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getDailyUpdates } from '../features/dailyUpdates/dailyUpdatesSlice';

const DailyUpdatesTable = () => {
  const dispatch = useDispatch();
  const dailyUpdates = useSelector((state) => state.dailyUpdates.dailyUpdates);
  const status = useSelector((state) => state.dailyUpdates.status);
  const error = useSelector((state) => state.dailyUpdates.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getDailyUpdates());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div className="card">
      <DataTable value={dailyUpdates} paginator rows={10} rowsPerPageOptions={[5, 10, 20]}>
        <Column field="mood" header="Mood" sortable></Column>
        <Column field="energyLevel" header="Energy Level" sortable></Column>
        <Column field="physicalFeelings" header="Physical Feelings" sortable></Column>
        <Column field="emotionalThoughts" header="Emotional Thoughts" sortable></Column>
        <Column field="activities" header="Activities" sortable></Column>
        <Column field="highlightsOfTheDay" header="Highlights of the Day" sortable></Column>
        <Column field="concerns" header="Concerns" sortable></Column>
        <Column field="babysDevelopmentObservations" header="Baby's Development Observations" sortable></Column>
        <Column field="additionalNotes" header="Additional Notes" sortable></Column>
      </DataTable>
    </div>
  );
};

export default DailyUpdatesTable;
