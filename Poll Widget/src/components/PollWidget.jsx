import React, { useState } from 'react';
import { pollConfig } from '../poll-config/poll-config';

const PollOption = ({ option, voteCount, votePercentage, onVote }) => {
    return (
        <div className="poll-option" onClick={() => onVote(option)}>
            {/* text section */}
            <div className="poll-option__textSection">
                {/* Option name */}
                <span>{option}</span>
                {/* Option poll info */}
                <span>
                    {`Votes: ${voteCount}, Percentage: ${votePercentage}%`}
                </span>
            </div>
            {/* progress bar */}
            <div className="poll-option__progressContainer">
                <div className="poll-option__progress" style={{ transform: `scaleX(${votePercentage / 100})`, transformOrigin: "left" }}></div>
            </div>
        </div>
    )
}

const PollWidget = () => {
    const [totalVotes, setTotalVotes] = useState(0);
    const [pollOptions, setPollOptions] = useState(pollConfig.options.map((option) => ({ option, voteCount: 0, votePercentage: 0 })));

    const onVote = (pollOption) => {
        setTotalVotes(prev => prev + 1)
        const updatesPollOptions = pollOptions.map((option) => {
            if (option.option === pollOption) {
                return {
                    option: option.option,
                    voteCount: option.voteCount + 1,
                    votePercentage: totalVotes === 0 ? 0 : Math.ceil(((option.voteCount + 1) / totalVotes) * 100),
                }
            } else {
                return {
                    option: option.option,
                    voteCount: option.voteCount,
                    votePercentage: totalVotes === 0 ? 0 : Math.ceil(((option.voteCount + 1) / totalVotes) * 100),
                }
            }
        });
        setPollOptions(updatesPollOptions);
    }

    return (
        <div className="poll">
            {/* Question */}
            <div className="poll-question">Q. {pollConfig.question}</div>
            {/* Options */}
            <div>
                {pollOptions.map((option, idx) => (
                    <PollOption key={idx} option={option.option} voteCount={option.voteCount} votePercentage={option.votePercentage} onVote={onVote} />
                ))}
            </div>
            <div>{`Total Votes: ${totalVotes}`}</div>
        </div>
    )
}

export default PollWidget;