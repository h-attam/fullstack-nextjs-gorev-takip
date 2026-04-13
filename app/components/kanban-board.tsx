import React from 'react';
import { Ticket, TicketStatus } from '@/utils/data';

interface KanbanBoardProps {
  tickets: Ticket[];
}

const KanbanBoard = ({ tickets }: KanbanBoardProps) => {
  const columns: { title: string; status: TicketStatus }[] = [
    { title: "To Do", status: "To Do" },
    { title: "In Progress", status: "In Progress" },
    { title: "Done", status: "Done" }
  ];

  return (
    <div className="flex gap-4 h-full items-start">
      {columns.map(col => {
        const colTickets = tickets.filter(t => t.status === col.status);
        
        return (
          <div key={col.status} className="flex-1 min-w-[300px] flex flex-col h-full">
            <div className={`py-2 px-1 mb-2 flex justify-between items-center text-sm`}>
              <h3 className="font-medium text-[#ededed] flex items-center gap-2 text-[13px]">
                {col.status === "To Do" && <span className="w-2.5 h-2.5 rounded-sm border border-dashed border-[#666]"></span>}
                {col.status === "In Progress" && <span className="w-2.5 h-2.5 rounded-sm border-2 border-r-transparent border-yellow-600"></span>}
                {col.status === "Done" && <span className="w-2.5 h-2.5 rounded-sm bg-blue-600"></span>}
                {col.title}
              </h3>
              <span className={`text-[#888888] text-[11px] font-mono`}>
                {colTickets.length}
              </span>
            </div>
            
            <div className="flex-1 overflow-y-auto flex flex-col gap-2 pb-8">
              {colTickets.map(ticket => (
                <div key={ticket.id} className="bg-[#111111] border border-[#222] p-3.5 rounded-md hover:border-[#444] transition-colors cursor-default shadow-sm group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[#888888] text-[11px] font-mono font-medium">{ticket.id}</span>
                    {ticket.priority === 'High' && <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>}
                  </div>
                  <h4 className="font-medium text-[#ededed] mb-1 leading-snug text-[13px]">{ticket.title}</h4>
                  <p className="text-[#666666] text-xs line-clamp-2 leading-relaxed mb-4">{ticket.description}</p>
                  
                  <div className="flex justify-between items-end mt-auto">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-[#222] border border-[#333] flex items-center justify-center text-[8px] font-bold text-[#ededed]">
                        {ticket.assignee.substring(0, 1)}
                      </div>
                      <span className="text-[11px] text-[#666]">{ticket.assignee}</span>
                    </div>
                    <span className="text-[10px] text-[#555] font-mono">{ticket.createdAt}</span>
                  </div>
                </div>
              ))}
              
              {colTickets.length === 0 && (
                <div className="text-[#444] text-xs py-4 px-2 border border-dashed border-[#222] rounded-md text-center mt-1">Kayıt yok.</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KanbanBoard;
