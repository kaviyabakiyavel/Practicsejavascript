var prjMgrValues = [
    {"proj_mgr":"Jack ProjManager","submitted_dollars":12000},
    {"proj_mgr":"Jack ProjManager","submitted_dollars":750000},
    {"proj_mgr":"Joe ProjManager","submitted_dollars":45000}
 ]

 var output = _(prjMgrValues)
    .groupBy('proj_mgr')
    .map((objs, key) => ({
        'proj_mgr': key,
        'submitted_dollars': _.sumBy(objs, 'submitted_dollars') }))
    .value();

console.log(output);