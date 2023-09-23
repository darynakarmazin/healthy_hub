export const selectCharts = state => {
  return {
    items: state.graph.items,
    isLoading: state.graph.isLoading,
    error: state.graph.error,
  };
};
