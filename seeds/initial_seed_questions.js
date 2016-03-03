
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('classing_questions').del(),

    // Inserts seed entries
    knex('classing_questions').insert({id: 1, question: 'Changed Rim Diameter?', stock_legal: 'false', sts_legal: 'true', stx_legal: 'true', stu_legal: 'true', sp_legal: 'true', sm_legal: 'true'}),
    knex('classing_questions').insert({id: 2, question: 'Tires Wider than 225?', stock_legal: null, sts_legal: 'false', stx_legal: 'true', stu_legal: 'true', sp_legal: 'true', sm_legal: 'true'}),
    knex('classing_questions').insert({id: 3, question: 'Tire UTQG Treadwear less than 140?', stock_legal: null, sts_legal: 'false', stx_legal: 'false', stu_legal: 'false', sp_legal: null, sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 4, question: 'DOT R-Compound Tire?', stock_legal: 'false', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 5, question: 'Changed Front Anti Roll Bar and/or Bushings?', stock_legal: 'true', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 6, question: 'Changed Rear Anti Roll Bar and/or Bushings?', stock_legal: 'false', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 7, question: 'Non-Stock Springs?', stock_legal: 'false', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 8, question: 'Installed Camber Plates?', stock_legal: 'false', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 9, question: 'Installed Front or Rear Shock Tower Brace?', stock_legal: 'false', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 10, question: 'Installed Shocks with Adjustable Valving?', stock_legal: 'true', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 11, question: 'Replaced Struts with Coil-Over Suspension?', stock_legal: 'false', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 12, question: 'Changed Suspension Bushing Material or Offset?', stock_legal: 'false', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 13, question: 'Added Track Bar or Panhard Bar?', stock_legal: 'false', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 14, question: 'Changed Diameter of Brake Rotors?', stock_legal: 'false', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 15, question: 'Installed Drilled or Slotted Brake Rotors?', stock_legal: 'false', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 16, question: 'Installed Other than Stock Proportioning Valve?', stock_legal: 'false', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 17, question: 'Non-Emissions Legal Engine Mods?', stock_legal: 'false', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 18, question: 'Changed ECU Software, Chip, or VTEC Controller?', stock_legal: 'false', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 19, question: 'Changed Boost Controls or Levels?', stock_legal: 'false', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 20, question: 'Changed Air Filter Element in Stock Airbox?', stock_legal: 'true', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 21, question: 'Changed Air Filter Enclosure?', stock_legal: 'false', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 22, question: 'Installed Larger Throttle Body?', stock_legal: 'false', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 23, question: 'Changed Intake Manifold or Injectors to other than Stock?', stock_legal: 'false', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 24, question: 'Changed Cams or Valves to other than Stock?', stock_legal: 'rowValue', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 25, question: 'Installed Emissions Legal Headers?', stock_legal: 'rowValue', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 26, question: 'Installed High Flow Cat?', stock_legal: 'rowValue', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 27, question: 'Installed Underdrive Pulleys on Accessories?', stock_legal: 'rowValue', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 28, question: 'Added or Changed Turbo or Super Charger?', stock_legal: 'rowValue', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 29, question: 'Added or Changed Intercooler?', stock_legal: 'rowValue', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 30, question: 'Added Limited Slip Differential?', stock_legal: 'rowValue', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 31, question: 'Engine Swap Other than Strict Stock Replacement?', stock_legal: 'rowValue', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 32, question: 'Aftermarked Clutch or Flywheel?', stock_legal: 'rowValue', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 33, question: 'Added Spoilers, Splitters, Body Kit, or Rear Wing?', stock_legal: 'rowValue', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 34, question: 'Replaced Body Panels with Other than Original?', stock_legal: 'rowValue', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 35, question: 'Replaced Hood with Other than Original?', stock_legal: 'rowValue', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 36, question: 'Removed Rear Seats?', stock_legal: 'rowValue', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 37, question: 'Changed Front Seats?', stock_legal: 'rowValue', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 38, question: 'Added Short Throw Shift Kit?', stock_legal: 'rowValue', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'}),
    knex('classing_questions').insert({id: 39, question: 'Relocated the Battery?', stock_legal: 'rowValue', sts_legal: 'rowValue', stx_legal: 'rowValue', stu_legal: 'rowValue', sp_legal: 'rowValue', sm_legal: 'rowValue'})

  );
};
