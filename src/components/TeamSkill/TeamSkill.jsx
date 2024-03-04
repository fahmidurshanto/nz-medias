const TeamSkill = () => {
  return (
    <div className="text-center">
      <h3 className="text-4xl">Out Team Skills</h3>
      <div className="sm:grid-cols-3 md:grid-cols-7 ">
        <div
          className="radial-progress text-green-400 m-5"
          style={{ "--value": 95 }}
          role="progressbar"
        >
          <h4 className="p-5">95% Google Ads</h4>
        </div>
        <div
          className="radial-progress text-green-400 m-5"
          style={{ "--value": 90 }}
          role="progressbar"
        >
          <h4 className="p-5">90% Google Ads</h4>
        </div>
        <div
          className="radial-progress text-green-400 m-5"
          style={{ "--value": 93 }}
          role="progressbar"
        >
          <h4 className="p-5">93% Video Editing</h4>
        </div>
        <div
          className="radial-progress text-green-400 m-5"
          style={{ "--value": 85 }}
          role="progressbar"
        >
          <h4 className="p-5">85% Google Ads</h4>
        </div>
        <div
          className="radial-progress text-green-400 m-5"
          style={{ "--value": 85 }}
          role="progressbar"
        >
          <h4 className="p-5">85% Graphic Design</h4>
        </div>
        <div
          className="radial-progress text-green-400 m-5"
          style={{ "--value": 94 }}
          role="progressbar"
        >
          <h4 className="p-5">94% YouTube SEO</h4>
        </div>
        <div
          className="radial-progress text-green-400 m-5"
          style={{ "--value": 95 }}
          role="progressbar"
        >
          <h4 className="p-5">95% Instagram Ads</h4>
        </div>
      </div>
    </div>
  );
};

export default TeamSkill;
